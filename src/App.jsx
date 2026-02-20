import { useEffect, useMemo, useState } from 'react'

const WINDOWS = ['7D', '30D', 'ALL']
const TABS = ['近期盈亏', '未平仓位', '存取记录', '未成交订单']
const METRIC_LABELS = {
  roiPct: 'ROI',
  maxDrawdownPct: 'MDD',
  profitFactor: 'Profit Factor',
  avgTradesPerDay: '交易频率',
  winRatePct: '胜率',
  avgHoldHours: '平均持仓时间',
  longBiasPct: '方向偏好'
}

const metricsByWindow = {
  '7D': { roiPct: 4.2, maxDrawdownPct: 3.1, profitFactor: 1.4, avgTradesPerDay: 2.8, winRatePct: 62, avgHoldHours: 5.2, longBiasPct: 55 },
  '30D': { roiPct: 11.8, maxDrawdownPct: 5.43, profitFactor: 1.87, avgTradesPerDay: 2.1, winRatePct: 76, avgHoldHours: 7, longBiasPct: 50 },
  ALL: { roiPct: 21.4, maxDrawdownPct: 12.2, profitFactor: 1.56, avgTradesPerDay: 1.7, winRatePct: 68, avgHoldHours: 9.3, longBiasPct: 58 }
}

const curves = {
  '7D': [0, 5, 2, 11, 18, 15, 22, 30],
  '30D': [0, 2, 7, 6, 12, 18, 23, 21, 28, 34, 42, 43, 42],
  ALL: [0, 3, 8, 6, 14, 18, 25, 29, 38, 42, 44, 39, 41, 42, 42]
}

const tradeRowsByWindow = {
  '7D': [
    { openedAt: 'Feb 18, 9:10 PM', symbol: 'HYPE', side: 'LONG', leverage: 6, pnl: 728.51, duration: '17m' },
    { openedAt: 'Feb 17, 7:26 PM', symbol: 'BTC', side: 'SHORT', leverage: 4, pnl: -210.2, duration: '2h 10m' }
  ],
  '30D': [
    { openedAt: 'Nov 21, 6:06 PM', symbol: 'XPL', side: 'LONG', leverage: 10, pnl: -1000.95, duration: '91d 1h' },
    { openedAt: 'Feb 6, 2:40 PM', symbol: 'HYPE', side: 'SHORT', leverage: 3, pnl: 728.51, duration: '17m' },
    { openedAt: 'Feb 6, 2:33 PM', symbol: 'HYPE', side: 'LONG', leverage: 2, pnl: 0, duration: '1m' }
  ],
  ALL: [
    { openedAt: 'Sep 4, 11:01 AM', symbol: 'ETH', side: 'LONG', leverage: 5, pnl: 2120.15, duration: '3d 4h' },
    { openedAt: 'Jul 12, 5:16 PM', symbol: 'BTC', side: 'SHORT', leverage: 8, pnl: -780.2, duration: '4h 10m' }
  ]
}

const openPositions = []

const defaultCopyConfig = {
  mode: 'PROPORTIONAL',
  ratio: 1,
  amountUsd: 100,
  maxLeverage: 5,
  perTradeStopLossPct: 8,
  maxDrawdownStopPct: 10,
  allowedSymbols: 'BTC,ETH,SOL'
}

const formatPct = (v) => (v === undefined || v === null ? '—' : `${v.toFixed(2)}%`)
const formatNum = (v) => (v === undefined || v === null ? '—' : v.toLocaleString())

function simulateRequest(payload, failRate = 0.12) {
  return new Promise((resolve, reject) => {
    const delay = 300 + Math.floor(Math.random() * 500)
    setTimeout(() => {
      if (Math.random() < failRate) reject(new Error('mock failed'))
      else resolve(payload)
    }, delay)
  })
}

function App() {
  const [windowKey, setWindowKey] = useState('ALL')
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [chartMode, setChartMode] = useState('equity')
  const [loadingMain, setLoadingMain] = useState(true)
  const [loadingTab, setLoadingTab] = useState(false)
  const [errorMain, setErrorMain] = useState('')
  const [toast, setToast] = useState('')
  const [followed, setFollowed] = useState(false)
  const [copyEnabled, setCopyEnabled] = useState(false)
  const [copyDialogOpen, setCopyDialogOpen] = useState(false)
  const [copyConfig, setCopyConfig] = useState(defaultCopyConfig)
  const [copyErrors, setCopyErrors] = useState({})
  const [backtestOpen, setBacktestOpen] = useState(false)
  const [backtestLoading, setBacktestLoading] = useState(false)
  const [backtestError, setBacktestError] = useState('')
  const [backtestResult, setBacktestResult] = useState(null)
  const [params, setParams] = useState({ window: '30D', feeBps: 5, slippageBps: 8, positionSizing: 'RATIO' })

  useEffect(() => {
    const storedFollowed = localStorage.getItem('demo_followed') === '1'
    const storedCopy = localStorage.getItem('demo_copy_config')
    const storedEnabled = localStorage.getItem('demo_copy_enabled') === '1'
    setFollowed(storedFollowed)
    if (storedCopy) setCopyConfig(JSON.parse(storedCopy))
    setCopyEnabled(storedEnabled)
  }, [])

  useEffect(() => {
    setLoadingMain(true)
    setErrorMain('')
    simulateRequest(true)
      .then(() => setLoadingMain(false))
      .catch(() => {
        setErrorMain('数据加载失败，请重试')
        setLoadingMain(false)
      })
  }, [windowKey])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(timer)
  }, [toast])

  const metrics = useMemo(() => metricsByWindow[windowKey], [windowKey])
  const chartData = useMemo(() => curves[windowKey], [windowKey])
  const rows = useMemo(() => tradeRowsByWindow[windowKey] ?? [], [windowKey])

  const validateCopy = (cfg) => {
    const next = {}
    if (cfg.mode === 'FIXED_USD' && (!cfg.amountUsd || Number(cfg.amountUsd) <= 0)) next.amountUsd = '固定金额必须 > 0'
    if (cfg.mode === 'PROPORTIONAL' && (!cfg.ratio || Number(cfg.ratio) <= 0)) next.ratio = '跟随比例必须 > 0'
    if (!cfg.maxLeverage || Number(cfg.maxLeverage) <= 0 || Number(cfg.maxLeverage) > 20) next.maxLeverage = '最大杠杆需在 1-20'
    if (Number(cfg.maxDrawdownStopPct) <= 0 || Number(cfg.maxDrawdownStopPct) > 80) next.maxDrawdownStopPct = '最大回撤止损需在 1-80%'
    if (Number(cfg.perTradeStopLossPct) <= 0 || Number(cfg.perTradeStopLossPct) > 50) next.perTradeStopLossPct = '单笔止损需在 1-50%'
    setCopyErrors(next)
    return Object.keys(next).length === 0
  }


  const isCopyValid = useMemo(() => {
    const cfg = copyConfig
    if (cfg.mode === 'FIXED_USD' && (!cfg.amountUsd || Number(cfg.amountUsd) <= 0)) return false
    if (cfg.mode === 'PROPORTIONAL' && (!cfg.ratio || Number(cfg.ratio) <= 0)) return false
    if (!cfg.maxLeverage || Number(cfg.maxLeverage) <= 0 || Number(cfg.maxLeverage) > 20) return false
    if (Number(cfg.maxDrawdownStopPct) <= 0 || Number(cfg.maxDrawdownStopPct) > 80) return false
    if (Number(cfg.perTradeStopLossPct) <= 0 || Number(cfg.perTradeStopLossPct) > 50) return false
    return true
  }, [copyConfig])

  const onToggleFollow = () => {
    const next = !followed
    setFollowed(next)
    localStorage.setItem('demo_followed', next ? '1' : '0')
    setToast(next ? '已追踪该交易员' : '已取消追踪')
  }

  const openTab = (tab) => {
    setLoadingTab(true)
    setActiveTab(tab)
    setTimeout(() => setLoadingTab(false), 350)
  }

  const saveCopy = () => {
    if (!validateCopy(copyConfig)) return
    localStorage.setItem('demo_copy_config', JSON.stringify(copyConfig))
    localStorage.setItem('demo_copy_enabled', '1')
    setCopyEnabled(true)
    setCopyDialogOpen(false)
    setToast('跟单已开启（模拟）')
  }

  const runBacktest = async () => {
    if (params.feeBps < 0 || params.slippageBps < 0) {
      setBacktestError('手续费和滑点不能为负数')
      return
    }
    setBacktestError('')
    setBacktestLoading(true)
    setBacktestResult(null)
    try {
      await simulateRequest(true, 0.08)
      const base = metricsByWindow[params.window] || metricsByWindow['30D']
      const penalty = (params.feeBps + params.slippageBps) / 50
      const roi = Math.max(base.roiPct - penalty, -40)
      const mdd = Math.min(base.maxDrawdownPct + penalty / 2, 40)
      const result = {
        roiPct: Number(roi.toFixed(2)),
        maxDrawdownPct: Number(mdd.toFixed(2)),
        profitFactor: Number(Math.max(base.profitFactor - penalty / 10, 0.8).toFixed(2)),
        trades: Math.floor((base.avgTradesPerDay || 1) * 30),
        curve: curves[params.window].map((p, i) => p - i * penalty * 0.2)
      }
      setBacktestResult(result)
      localStorage.setItem('demo_backtest_history', JSON.stringify({ params, result, at: new Date().toISOString() }))
    } catch (e) {
      setBacktestError('回测执行失败，请稍后重试')
    } finally {
      setBacktestLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="topbar"><span className="logo">Aigram</span><span className="muted">跟单交易 / Trader Profile Demo</span></header>
      {toast ? <div className="toast">{toast}</div> : null}

      <section className="card identity">
        <div>
          <div className="muted small">交易员</div>
          <h2>0xff3f...316d <button className="link-btn" onClick={() => navigator.clipboard.writeText('0xff3f81bf116731567f2d8f7f38c057fc9f4d316d').then(() => setToast('地址已复制'))}>复制</button></h2>
          <p>跟踪时长 4 months</p>
        </div>
        <div>
          <p className="muted small">永续账户价值</p>
          <p>$6,712.65</p>
          <p className="muted small">保证金使用率 4.2%</p>
          <div className="progress"><span style={{ width: '4.2%' }} /></div>
          <p className="warn">最近交易 11 天前：可能停更</p>
        </div>
        <div className="cta-col">
          {copyEnabled ? <span className="badge">跟单中</span> : null}
          <button className="btn" onClick={() => setCopyDialogOpen(true)}>跟单交易员</button>
          <button className="btn secondary" onClick={onToggleFollow}>{followed ? '取消追踪' : '追踪交易员'}</button>
          <button className="btn secondary" onClick={() => setBacktestOpen(true)}>运行回测</button>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <div className="row between"><h3>KPI</h3><TimeTabs active={windowKey} onChange={setWindowKey} /></div>
          {loadingMain ? <SkeletonCards /> : errorMain ? <ErrorBlock msg={errorMain} onRetry={() => setWindowKey((v) => v)} /> : (
            <div className="kpi-grid">
              {Object.entries(METRIC_LABELS).map(([key, label]) => (
                <KpiCard key={key} label={label} value={key === 'profitFactor' ? formatNum(metrics[key]) : key === 'avgHoldHours' ? `${formatNum(metrics[key])}h` : formatPct(metrics[key])} />
              ))}
            </div>
          )}
        </div>
        <div className="card">
          <div className="row between"><h3>Equity / PnL 曲线</h3><div className="chip-group"><button className={chartMode === 'equity' ? 'chip on' : 'chip'} onClick={() => setChartMode('equity')}>Equity</button><button className={chartMode === 'pnl' ? 'chip on' : 'chip'} onClick={() => setChartMode('pnl')}>PnL</button></div></div>
          {loadingMain ? <div className="skeleton chart" /> : errorMain ? <ErrorBlock msg="曲线加载失败" onRetry={() => setWindowKey((v) => v)} /> : <SimpleChart data={chartData} mode={chartMode} />}
        </div>
      </section>

      <section className="card">
        <div className="row between">
          <div className="tabs">{TABS.map((tab) => <button key={tab} className={activeTab === tab ? 'tab on' : 'tab'} onClick={() => openTab(tab)}>{tab}</button>)}</div>
          <button className="link-btn" onClick={() => setBacktestOpen(true)}>▶ 运行回测</button>
        </div>
        {loadingTab ? <div className="skeleton table" /> : <TabContent tab={activeTab} rows={rows} openPositions={openPositions} />}
      </section>

      {copyDialogOpen && (
        <Dialog title="跟单设置" onClose={() => setCopyDialogOpen(false)}>
          <div className="form-grid">
            <label>模式<select value={copyConfig.mode} onChange={(e) => setCopyConfig((s) => ({ ...s, mode: e.target.value }))}><option value="PROPORTIONAL">按比例</option><option value="FIXED_USD">固定金额</option></select></label>
            {copyConfig.mode === 'PROPORTIONAL' ? <label>跟随比例(x)<input type="number" min="0" value={copyConfig.ratio} onChange={(e) => setCopyConfig((s) => ({ ...s, ratio: Number(e.target.value) }))} /></label> : <label>固定金额(USD)<input type="number" min="0" value={copyConfig.amountUsd} onChange={(e) => setCopyConfig((s) => ({ ...s, amountUsd: Number(e.target.value) }))} /></label>}
            <label>最大杠杆<input type="number" value={copyConfig.maxLeverage} onChange={(e) => setCopyConfig((s) => ({ ...s, maxLeverage: Number(e.target.value) }))} />{copyErrors.maxLeverage && <span className="error">{copyErrors.maxLeverage}</span>}</label>
            <label>单笔止损(%)<input type="number" value={copyConfig.perTradeStopLossPct} onChange={(e) => setCopyConfig((s) => ({ ...s, perTradeStopLossPct: Number(e.target.value) }))} />{copyErrors.perTradeStopLossPct && <span className="error">{copyErrors.perTradeStopLossPct}</span>}</label>
            <label>最大回撤止损(%)<input type="number" value={copyConfig.maxDrawdownStopPct} onChange={(e) => setCopyConfig((s) => ({ ...s, maxDrawdownStopPct: Number(e.target.value) }))} />{copyErrors.maxDrawdownStopPct && <span className="error">{copyErrors.maxDrawdownStopPct}</span>}</label>
            <label>允许品种<input value={copyConfig.allowedSymbols} onChange={(e) => setCopyConfig((s) => ({ ...s, allowedSymbols: e.target.value }))} /></label>
          </div>
          <p className="warn">风险提示：跟单可能导致本金亏损，请确保杠杆与止损设置可承受。</p>
          <div className="row end"><button className="btn secondary" onClick={() => setCopyDialogOpen(false)}>取消</button><button className="btn" onClick={saveCopy} disabled={!isCopyValid}>确认跟单</button></div>
        </Dialog>
      )}

      {backtestOpen && (
        <Dialog title="Backtest Runner" onClose={() => setBacktestOpen(false)}>
          <div className="form-grid">
            <label>时间范围<select value={params.window} onChange={(e) => setParams((s) => ({ ...s, window: e.target.value }))}>{WINDOWS.map((w) => <option key={w}>{w}</option>)}</select></label>
            <label>手续费(bps)<input type="number" value={params.feeBps} onChange={(e) => setParams((s) => ({ ...s, feeBps: Number(e.target.value) }))} /></label>
            <label>滑点(bps)<input type="number" value={params.slippageBps} onChange={(e) => setParams((s) => ({ ...s, slippageBps: Number(e.target.value) }))} /></label>
            <label>仓位规则<select value={params.positionSizing} onChange={(e) => setParams((s) => ({ ...s, positionSizing: e.target.value }))}><option value="RATIO">RATIO</option><option value="FIXED">FIXED</option></select></label>
          </div>
          <div className="row between"><button className="btn" onClick={runBacktest} disabled={backtestLoading}>{backtestLoading ? '回测中...' : '运行回测'}</button>{backtestError ? <span className="error">{backtestError}</span> : null}</div>
          {backtestLoading ? <div className="skeleton chart" /> : null}
          {backtestResult ? (
            <div className="result">
              <div className="kpi-grid">
                <KpiCard label="ROI" value={`${backtestResult.roiPct}%`} />
                <KpiCard label="MDD" value={`${backtestResult.maxDrawdownPct}%`} />
                <KpiCard label="Profit Factor" value={String(backtestResult.profitFactor)} />
                <KpiCard label="Trades" value={String(backtestResult.trades)} />
              </div>
              <SimpleChart data={backtestResult.curve} mode="equity" />
            </div>
          ) : null}
        </Dialog>
      )}
    </div>
  )
}

function TimeTabs({ active, onChange }) {
  return <div className="chip-group">{WINDOWS.map((w) => <button key={w} className={active === w ? 'chip on' : 'chip'} onClick={() => onChange(w)}>{w}</button>)}</div>
}

function KpiCard({ label, value }) {
  return <div className="kpi"><div className="muted small">{label} ⓘ</div><div className="kpi-value">{value}</div></div>
}

function SkeletonCards() {
  return <div className="kpi-grid">{Array.from({ length: 7 }).map((_, i) => <div key={i} className="skeleton" style={{ height: 74 }} />)}</div>
}

function ErrorBlock({ msg, onRetry }) {
  return <div className="error-block"><p>{msg}</p><button className="btn secondary" onClick={onRetry}>重试</button></div>
}

function TabContent({ tab, rows, openPositions }) {
  if ((tab === '近期盈亏' && rows.length === 0) || (tab === '未平仓位' && openPositions.length === 0)) {
    return <div className="empty">暂无数据，尝试切换时间范围或查看近期盈亏。</div>
  }
  if (tab === '未平仓位') {
    return <table><thead><tr><th>标的</th><th>方向</th><th>杠杆</th><th>开仓价</th><th>标记价</th><th>PnL</th></tr></thead><tbody>{openPositions.map((r) => <tr key={r.symbol}><td>{r.symbol}</td><td>{r.side}</td><td>{r.leverage}x</td><td>{r.entry}</td><td>{r.mark}</td><td className={r.pnl >= 0 ? 'pos' : 'neg'}>${r.pnl}</td></tr>)}</tbody></table>
  }
  if (tab !== '近期盈亏') return <div className="empty">该面板为 MVP 占位，后续接入真实流水。</div>
  return <table><thead><tr><th>开仓日期</th><th>代码</th><th>方向</th><th>杠杆</th><th>总盈亏</th><th>持仓时间</th></tr></thead><tbody>{rows.map((r, i) => <tr key={i}><td>{r.openedAt}</td><td>{r.symbol}</td><td>{r.side}</td><td>{r.leverage}x</td><td className={r.pnl >= 0 ? 'pos' : 'neg'}>${r.pnl}</td><td>{r.duration}</td></tr>)}</tbody></table>
}

function Dialog({ title, children, onClose }) {
  return <div className="modal-bg"><div className="modal"><div className="row between"><h3>{title}</h3><button className="link-btn" onClick={onClose}>✕</button></div>{children}</div></div>
}

function SimpleChart({ data, mode }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const points = data
    .map((value, i) => {
      const x = (i / (data.length - 1 || 1)) * 100
      const y = 100 - ((value - min) / (max - min || 1)) * 100
      return `${x},${y}`
    })
    .join(' ')

  return <div className="chart-wrap"><svg viewBox="0 0 100 100" preserveAspectRatio="none" className="chart-svg"><polyline points={points} fill="none" stroke={mode === 'equity' ? '#15e5b1' : '#8f8fff'} strokeWidth="1.7" /></svg></div>
}

export default App
