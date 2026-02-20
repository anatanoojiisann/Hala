'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { curve, metricsByWindow, MetricsWindow, trader, tradesByWindow } from '@/lib/mock'

type Tab = 'pnl' | 'positions' | 'deposits' | 'orders'
type View = 'equity' | 'pnl'

type CopyConfig = {
  enabled: boolean
  mode: 'FIXED_USD' | 'PROPORTIONAL'
  amountUsd: number
  ratio: number
  maxLeverage: number
  perTradeStopLossPct: number
  maxDrawdownStopPct: number
  allowedSymbols: string
}

const WINDOW_OPTIONS: MetricsWindow[] = ['7D', '30D', 'ALL']

const emptyCopy: CopyConfig = {
  enabled: false,
  mode: 'PROPORTIONAL',
  amountUsd: 100,
  ratio: 1,
  maxLeverage: 1,
  perTradeStopLossPct: 5,
  maxDrawdownStopPct: 10,
  allowedSymbols: 'BTC,ETH,SOL',
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

function Toast({ message }: { message: string }) {
  return <div className="fixed right-4 top-4 z-50 rounded-md border border-line bg-black/80 px-4 py-2 text-sm">{message}</div>
}

export default function Page() {
  const [window, setWindow] = useState<MetricsWindow>('ALL')
  const [tab, setTab] = useState<Tab>('pnl')
  const [view, setView] = useState<View>('equity')
  const [loading, setLoading] = useState(true)
  const [tableLoading, setTableLoading] = useState(false)
  const [error, setError] = useState('')
  const [toast, setToast] = useState('')
  const [isFollow, setIsFollow] = useState(false)
  const [copyConfig, setCopyConfig] = useState<CopyConfig>(emptyCopy)
  const [showCopy, setShowCopy] = useState(false)
  const [showBacktest, setShowBacktest] = useState(false)
  const [backtestLoading, setBacktestLoading] = useState(false)
  const [backtestError, setBacktestError] = useState('')
  const [backtestResult, setBacktestResult] = useState<null | { roi: number; mdd: number; pf: number; trades: number }>(null)

  const metrics = metricsByWindow[window]
  const trades = tradesByWindow[window]

  useEffect(() => {
    const f = localStorage.getItem('follow:0xff3f')
    const c = localStorage.getItem('copyConfig:0xff3f')
    setIsFollow(f === '1')
    if (c) setCopyConfig(JSON.parse(c))
    ;(async () => {
      await wait(600)
      if (Math.random() < 0.1) {
        setError('加载失败，请重试。')
      }
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 1800)
    return () => clearTimeout(t)
  }, [toast])

  const curvePath = useMemo(() => {
    const values = view === 'equity' ? curve : curve.map((x) => x - 0.5)
    return values.map((v, i) => `${i * 28},${190 - v * 140}`).join(' ')
  }, [view])

  async function onWindowChange(next: MetricsWindow) {
    setWindow(next)
    setTableLoading(true)
    await wait(450)
    setTableLoading(false)
  }

  async function onTabChange(next: Tab) {
    setTab(next)
    setTableLoading(true)
    await wait(350)
    setTableLoading(false)
  }

  function toggleFollow() {
    const next = !isFollow
    setIsFollow(next)
    localStorage.setItem('follow:0xff3f', next ? '1' : '0')
    setToast(next ? '已追踪交易员' : '已取消追踪')
  }

  function saveCopy(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (copyConfig.maxLeverage <= 0 || copyConfig.amountUsd <= 0 || copyConfig.maxDrawdownStopPct <= 0) return
    const next = { ...copyConfig, enabled: true }
    setCopyConfig(next)
    localStorage.setItem('copyConfig:0xff3f', JSON.stringify(next))
    setShowCopy(false)
    setToast('跟单已开启（模拟）')
  }

  async function runBacktest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBacktestError('')
    if (copyConfig.maxLeverage <= 0 || copyConfig.amountUsd <= 0) {
      setBacktestError('参数不合法：金额与杠杆必须大于 0')
      return
    }
    setBacktestLoading(true)
    await wait(750)
    if (Math.random() < 0.1) {
      setBacktestLoading(false)
      setBacktestError('回测失败，请重试。')
      return
    }
    setBacktestLoading(false)
    setBacktestResult({ roi: 16.2, mdd: 9.1, pf: 1.41, trades: 27 })
  }

  const invalidCopy = copyConfig.maxLeverage <= 0 || (copyConfig.mode === 'FIXED_USD' && copyConfig.amountUsd <= 0) || (copyConfig.mode === 'PROPORTIONAL' && (copyConfig.ratio <= 0 || copyConfig.ratio > 5)) || copyConfig.maxDrawdownStopPct <= 0 || copyConfig.maxDrawdownStopPct > 100

  if (loading) {
    return <div className="mx-auto max-w-7xl space-y-4 p-6">{[1, 2, 3].map((n) => <div key={n} className="h-40 animate-pulse rounded-xl bg-[#111827]" />)}</div>
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl space-y-4 p-6 text-gray-100">
      {toast && <Toast message={toast} />}
      {error && (
        <div className="card flex items-center justify-between p-4 text-red-300">
          <span>{error}</span>
          <button className="btn" onClick={() => setError('')}>重试</button>
        </div>
      )}

      <section className="card grid grid-cols-1 gap-4 p-4 lg:grid-cols-[1fr_1fr_auto]">
        <div>
          <div className="text-sm text-emerald-400">☆ 交易员</div>
          <div className="mt-1 flex items-center gap-2 text-2xl font-semibold">{trader.address}<button className="text-xs text-gray-400" onClick={() => navigator.clipboard.writeText('0xff3f81bf116...')}>复制</button></div>
          <p className="mt-3 text-sm text-gray-400">时长 {Math.floor(trader.trackingSinceDays / 30)} months</p>
          <p className="text-sm text-amber-300">最近交易 {trader.lastTradeDaysAgo} 天前：可能停更</p>
        </div>
        <div className="grid gap-2 text-sm">
          <p>永续账户价值 <b>${trader.equity.toLocaleString()}</b></p>
          <p>保证金使用率 <b>{(trader.marginUtilization * 100).toFixed(2)}%</b></p>
          <div className="h-2 rounded bg-gray-800"><div className="h-2 rounded bg-gray-200" style={{ width: `${trader.marginUtilization * 100}%` }} /></div>
        </div>
        <div className="grid gap-2">
          <button className="btn btn-primary" onClick={() => setShowCopy(true)}>{copyConfig.enabled ? '跟单中' : '跟单交易员'}</button>
          <button className="btn" onClick={toggleFollow}>{isFollow ? '取消追踪' : '追踪交易员'}</button>
          <button className="btn" onClick={() => setShowBacktest(true)}>运行回测</button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="card p-4">
          <div className="mb-4 flex gap-2">{WINDOW_OPTIONS.map((w) => <button key={w} className={`btn ${window === w ? 'bg-gray-800' : ''}`} onClick={() => onWindowChange(w)}>{w}</button>)}</div>
          <div className="grid grid-cols-2 gap-3 border-b border-line pb-4 text-sm md:grid-cols-4">
            <Kpi label="ROI" v={metrics.roiPct} suffix="%" tip="收益率（demo 口径）" />
            <Kpi label="MDD" v={metrics.maxDrawdownPct} suffix="%" tip="最大回撤（demo 口径）" />
            <Kpi label="Profit Factor" v={metrics.profitFactor} tip="总盈利/总亏损绝对值" />
            <Kpi label="交易频率" v={metrics.avgTradesPerDay} suffix="/d" tip="日均交易次数" />
            <Kpi label="胜率" v={metrics.winRatePct} suffix="%" tip="盈利笔数/总笔数" />
            <Kpi label="平均持仓时间" v={metrics.avgHoldHours} suffix="h" tip="平仓单平均持仓" />
            <Kpi label="方向偏好" v={metrics.longBiasPct} suffix="% long" tip="做多成交占比" />
          </div>
          <div className="mt-4">
            <div className="mb-3 flex items-center justify-between"><div className="text-sm text-gray-300">{view === 'equity' ? '永续余额曲线' : 'PnL曲线'}</div><div className="flex gap-2"><button className={`btn ${view === 'equity' ? 'bg-gray-800' : ''}`} onClick={() => setView('equity')}>Equity</button><button className={`btn ${view === 'pnl' ? 'bg-gray-800' : ''}`} onClick={() => setView('pnl')}>PnL</button></div></div>
            <svg viewBox="0 0 420 200" className="h-52 w-full rounded-lg bg-[#070d14] p-2"><polyline fill="none" stroke="#29e0b1" strokeWidth="3" points={curvePath} /></svg>
          </div>
        </div>

        <div className="card p-4 text-sm">
          <h3 className="mb-3 font-medium">风险提示</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• 当前保证金使用率 {(trader.marginUtilization * 100).toFixed(2)}%</li>
            <li>• 近 {window} 最大回撤 {metrics.maxDrawdownPct ?? '—'}%</li>
            <li>• 建议最大跟单杠杆 ≤ 3x</li>
          </ul>
        </div>
      </section>

      <section className="card p-4">
        <div className="mb-3 flex flex-wrap gap-2">{[
          ['pnl', '近期盈亏'],
          ['positions', '未平仓位'],
          ['deposits', '存取记录'],
          ['orders', '未成交订单'],
        ].map(([k, name]) => <button key={k} className={`btn ${tab === k ? 'bg-gray-800' : ''}`} onClick={() => onTabChange(k as Tab)}>{name}</button>)}</div>

        {tableLoading ? <div className="h-24 animate-pulse rounded bg-gray-900" /> : (
          <>
            {tab === 'pnl' && (
              trades.length === 0 ? <Empty text="该时间范围无交易，试试切换到 ALL" /> : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-gray-400"><tr><th>开仓日期</th><th>代码</th><th>方向</th><th>总盈亏</th><th>持仓时间</th></tr></thead>
                    <tbody>{trades.map((t, i) => <tr key={i} className="border-t border-line"><td className="py-2">{t.openedAt}</td><td>{t.symbol}</td><td>{t.side} {t.leverage ? `${t.leverage}x` : ''}</td><td className={t.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{t.pnl.toFixed(2)}</td><td>{t.durationMins ? `${Math.floor(t.durationMins / 60)}h` : '-'}</td></tr>)}</tbody>
                  </table>
                </div>
              )
            )}
            {tab === 'positions' && <Empty text="无未平仓位，查看近期盈亏" />}
            {tab === 'deposits' && <Empty text="暂无存取记录" />}
            {tab === 'orders' && <Empty text="暂无未成交订单" />}
          </>
        )}
      </section>

      {showCopy && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4">
          <form onSubmit={saveCopy} className="card w-full max-w-lg space-y-3 p-4">
            <h3 className="text-lg font-semibold">跟单设置</h3>
            <div>
              <label className="text-sm">模式</label>
              <select className="input" value={copyConfig.mode} onChange={(e) => setCopyConfig((s) => ({ ...s, mode: e.target.value as CopyConfig['mode'] }))}>
                <option value="PROPORTIONAL">比例跟随</option>
                <option value="FIXED_USD">固定金额</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input label="跟随比例" type="number" value={copyConfig.ratio} onChange={(v) => setCopyConfig((s) => ({ ...s, ratio: Number(v) }))} />
              <Input label="固定金额 USD" type="number" value={copyConfig.amountUsd} onChange={(v) => setCopyConfig((s) => ({ ...s, amountUsd: Number(v) }))} />
              <Input label="最大杠杆" type="number" value={copyConfig.maxLeverage} onChange={(v) => setCopyConfig((s) => ({ ...s, maxLeverage: Number(v) }))} />
              <Input label="单笔止损 %" type="number" value={copyConfig.perTradeStopLossPct} onChange={(v) => setCopyConfig((s) => ({ ...s, perTradeStopLossPct: Number(v) }))} />
              <Input label="最大回撤止损 %" type="number" value={copyConfig.maxDrawdownStopPct} onChange={(v) => setCopyConfig((s) => ({ ...s, maxDrawdownStopPct: Number(v) }))} />
              <Input label="允许品种" value={copyConfig.allowedSymbols} onChange={(v) => setCopyConfig((s) => ({ ...s, allowedSymbols: v }))} />
            </div>
            <p className="rounded border border-amber-700 bg-amber-950/30 p-2 text-xs text-amber-300">风险提示：跟单可能导致本金亏损，请合理设置杠杆与止损。</p>
            {invalidCopy && <p className="text-sm text-rose-400">参数不合法，请检查金额、比例和杠杆。</p>}
            <div className="flex justify-end gap-2"><button className="btn" type="button" onClick={() => setShowCopy(false)}>取消</button><button className="btn btn-primary" disabled={invalidCopy}>确认跟单</button></div>
          </form>
        </div>
      )}

      {showBacktest && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/70 p-4">
          <form onSubmit={runBacktest} className="card w-full max-w-xl space-y-3 p-4">
            <h3 className="text-lg font-semibold">运行回测</h3>
            <div className="grid grid-cols-3 gap-2 text-sm"><div>时间范围 {window}</div><div>手续费 6 bps</div><div>滑点 3 bps</div></div>
            <button className="btn btn-primary">{backtestLoading ? '回测中...' : '运行回测'}</button>
            {backtestError && <p className="text-sm text-rose-400">{backtestError}</p>}
            {backtestResult && (
              <div className="space-y-2 rounded border border-line p-3 text-sm">
                <div className="grid grid-cols-4 gap-2"><Metric label="ROI" value={`${backtestResult.roi}%`} /><Metric label="MDD" value={`${backtestResult.mdd}%`} /><Metric label="PF" value={backtestResult.pf.toString()} /><Metric label="Trades" value={backtestResult.trades.toString()} /></div>
                <svg viewBox="0 0 360 120" className="h-24 w-full rounded bg-[#070d14] p-2"><polyline fill="none" stroke="#29e0b1" strokeWidth="3" points="0,100 40,90 80,75 120,80 160,55 200,45 240,52 280,34 320,29 360,22" /></svg>
                <p className="text-gray-400">交易摘要：本期共 27 笔，胜率 63%，主盈利来自 BTC 趋势段。</p>
              </div>
            )}
            <div className="flex justify-end"><button type="button" className="btn" onClick={() => setShowBacktest(false)}>关闭</button></div>
          </form>
        </div>
      )}
    </main>
  )
}

function Input({ label, value, onChange, type = 'text' }: { label: string; value: number | string; onChange: (x: string) => void; type?: string }) {
  return <label className="text-sm">{label}<input className="input mt-1" type={type} value={value} onChange={(e) => onChange(e.target.value)} /></label>
}

function Kpi({ label, v, suffix = '', tip }: { label: string; v?: number; suffix?: string; tip: string }) {
  return <div className="rounded-lg border border-line p-2"><p className="text-gray-400">{label} <span title={tip}>ⓘ</span></p><p className="mt-1 text-lg font-semibold">{v === undefined ? '—' : `${v}${suffix}`}</p></div>
}

function Empty({ text }: { text: string }) {
  return <div className="rounded-md border border-dashed border-line p-8 text-center text-sm text-gray-400">{text}</div>
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded border border-line p-2"><p className="text-gray-400">{label}</p><p className="font-semibold">{value}</p></div>
}
