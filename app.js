const dictionaries = {
  zh: {
    page: { title: '我的跟单', oneWayHint: '当前为单向净仓跟单' },
    header: { account: '当前地址', switchAddress: '切换地址', filter: '筛选', settings: '设置', refresh: '刷新数据' },
    tabs: { traders: '我的 Traders', positions: '当前净仓', records: '记录', funds: '资金' },
    overview: { totalEquity: '跟单总权益', dailyPnl: '今日 PnL', unrealizedPnl: '当前未实现 PnL', realizedPnl: '累计已实现 PnL', usedMargin: '已用保证金', freeMargin: '可用保证金', activeTraders: '跟单中 Trader 数', symbols: '当前持仓币种数' },
    risk: { normal: '风险正常', executionFailed: '执行失败提示', warning: '风险预警提示', traderPaused: 'Trader 暂停提示', cta: '查看详情' },
    common: { loading: '加载中…', empty: '暂无数据', error: '加载失败，请重试', viewDetails: '查看详情', adjust: '调整设置', pause: '暂停', stop: '停止跟单', reduce: '减仓', close: '平仓', viewExecution: '查看执行记录', view: '查看', switch: '切换', more: '更多', all: '全部', success: '成功', partial: '部分成交', failed: '失败', confirm: '确认', cancel: '取消', locale: '语言' },
    trader: { style: '风格', status: '状态', following: '跟单中', paused: '已暂停', stopped: '已停止', frozen: '风险冻结', invested: '我的总投入', netExposure: '当前净敞口', riskUsage: '风险预算使用率', symbolCount: '当前关联币种数', executionRate: '最近 24h 执行成功率', executionAddress: '执行地址', ruleSummary: '跟单规则摘要', symbolLimit: '单币种上限', maxInvested: '最大总投入', latestExecutions: '最近 3 条执行记录', noTrader: '暂无跟单中的 Trader', drawerTitle: 'Trader 设置', pauseConfirm: '确认暂停该 Trader 跟单？', stopConfirm: '确认停止该 Trader 跟单？' },
    positions: { direction: '净方向', long: 'Long', short: 'Short', flat: 'Flat', source: '来源 Trader', syncStatus: '当前状态', synced: '已同步', partialSync: '部分同步', executeFailed: '执行失败', value: '净仓位价值', avgPrice: '平均开仓价', markPrice: '标记价', leverage: '杠杆', marginMode: '保证金模式', marginUsed: '占用保证金', leaderAction: '最近一次 leader 动作', actualResult: '我方实际执行结果', deviation: '偏差原因摘要', noPosition: '当前暂无净仓位', cross: '全仓' },
    records: { subTabs: { execution: '执行记录', trade: '交易历史', orders: '历史订单' }, time: '时间', traderAction: 'Trader 动作', symbol: '币种', theoretical: '理论动作', actual: '实际执行', result: '结果', reason: '原因说明', unexecuted: '未执行', riskBlocked: '风控拦截', openTime: '开仓时间', closeTime: '平仓时间', openPrice: '开仓价', closePrice: '平仓价', sourceTrader: '来源 Trader', closeReason: '关闭原因', orderTime: '下单时间', orderType: '订单类型', side: '方向', quantity: '数量', status: '状态', source: '来源', noExecution: '暂无执行记录', noTrade: '暂无历史交易', noOrders: '暂无历史订单' },
    funds: { overview: '资金总览', accountBalance: '当前账户余额', withdrawable: '可提现', actions: '资金操作', deposit: 'Deposit', withdraw: 'Withdraw', transfer: '划转', addressList: '地址列表', shortName: '地址简称', note: '备注', createdAt: '创建时间', totalValue: '账户总值', status: '当前状态', history: '资金记录', type: '类型', amount: '金额', balanceChange: '余额变化', noHistory: '暂无资金记录' },
    filters: { trader: 'Trader', symbol: '币种', status: '状态' }
  },
  en: {
    page: { title: 'My Copy Trading', oneWayHint: 'Current mode: one-way net position copy trading' },
    header: { account: 'Current Address', switchAddress: 'Switch Address', filter: 'Filter', settings: 'Settings', refresh: 'Refresh Data' },
    tabs: { traders: 'My Traders', positions: 'Net Positions', records: 'Records', funds: 'Funds' },
    overview: { totalEquity: 'Total Copy Equity', dailyPnl: 'Today PnL', unrealizedPnl: 'Unrealized PnL', realizedPnl: 'Realized PnL', usedMargin: 'Used Margin', freeMargin: 'Available Margin', activeTraders: 'Active Traders', symbols: 'Open Symbols' },
    risk: { normal: 'Risk Normal', executionFailed: 'Execution Failure Alert', warning: 'Risk Warning', traderPaused: 'Trader Paused Alert', cta: 'Go to module' },
    common: { loading: 'Loading…', empty: 'No data', error: 'Failed to load, please retry', viewDetails: 'View Details', adjust: 'Adjust Settings', pause: 'Pause', stop: 'Stop Copying', reduce: 'Reduce', close: 'Close Position', viewExecution: 'View Execution', view: 'View', switch: 'Switch', more: 'More', all: 'All', success: 'Success', partial: 'Partial Fill', failed: 'Failed', confirm: 'Confirm', cancel: 'Cancel', locale: 'Language' },
    trader: { style: 'Style', status: 'Status', following: 'Following', paused: 'Paused', stopped: 'Stopped', frozen: 'Risk Frozen', invested: 'My Total Investment', netExposure: 'Net Exposure', riskUsage: 'Risk Budget Usage', symbolCount: 'Linked Symbols', executionRate: '24h Execution Success Rate', executionAddress: 'Execution Address', ruleSummary: 'Rule Summary', symbolLimit: 'Per-Symbol Limit', maxInvested: 'Max Total Investment', latestExecutions: 'Latest 3 Executions', noTrader: 'No active copy traders', drawerTitle: 'Trader Settings', pauseConfirm: 'Pause copy trading for this trader?', stopConfirm: 'Stop copy trading this trader?' },
    positions: { direction: 'Net Direction', long: 'Long', short: 'Short', flat: 'Flat', source: 'Source Trader', syncStatus: 'Sync Status', synced: 'Synced', partialSync: 'Partially Synced', executeFailed: 'Execution Failed', value: 'Net Position Value', avgPrice: 'Avg Entry Price', markPrice: 'Mark Price', leverage: 'Leverage', marginMode: 'Margin Mode', marginUsed: 'Margin Used', leaderAction: 'Latest Leader Action', actualResult: 'Follower Execution', deviation: 'Deviation Reason', noPosition: 'No net positions', cross: 'Cross' },
    records: { subTabs: { execution: 'Execution Records', trade: 'Trade History', orders: 'Order History' }, time: 'Time', traderAction: 'Trader Action', symbol: 'Symbol', theoretical: 'Theoretical Action', actual: 'Actual Execution', result: 'Result', reason: 'Reason', unexecuted: 'Unexecuted', riskBlocked: 'Risk Blocked', openTime: 'Open Time', closeTime: 'Close Time', openPrice: 'Open Price', closePrice: 'Close Price', sourceTrader: 'Source Trader', closeReason: 'Close Reason', orderTime: 'Order Time', orderType: 'Order Type', side: 'Side', quantity: 'Quantity', status: 'Status', source: 'Source', noExecution: 'No execution records', noTrade: 'No trade history', noOrders: 'No order history' },
    funds: { overview: 'Funds Overview', accountBalance: 'Account Balance', withdrawable: 'Withdrawable', actions: 'Fund Actions', deposit: 'Deposit', withdraw: 'Withdraw', transfer: 'Transfer', addressList: 'Address List', shortName: 'Short Name', note: 'Note', createdAt: 'Created Time', totalValue: 'Total Value', status: 'Status', history: 'Fund Records', type: 'Type', amount: 'Amount', balanceChange: 'Balance Change', noHistory: 'No fund records' },
    filters: { trader: 'Trader', symbol: 'Symbol', status: 'Status' }
  }
};
['ru', 'ko', 'ja', 'uz', 'vi', 'fr'].forEach((locale) => { dictionaries[locale] = JSON.parse(JSON.stringify(dictionaries.en)); });

const state = {
  locale: 'zh',
  tab: 'traders',
  recordsSubTab: 'execution',
  filterResult: 'all',
  drawerTrader: null
};

const mock = {
  account: { short: '0x7A3...19F2' },
  overview: { totalEquity: 148523.45, dailyPnl: 1824.2, unrealizedPnl: -234.11, realizedPnl: 8412.62, usedMargin: 54212.2, freeMargin: 70211.25, activeTraders: 6, symbols: 12 },
  risk: 'executionFailed',
  traders: [
    { id: 1, name: 'Alpha Orion', style: '趋势', status: 'following', invested: 25000, exposure: 18820, unrealized: 520.11, realized: 2350.7, riskUsage: 0.62, symbols: 4, successRate: 0.97, executionAddress: '0xA12...f9d', rules: 'BTC/ETH 重点跟单，单向净仓', perSymbolLimit: 8000, maxInvested: 30000, executions: ['BTC 增仓成功', 'ETH 减仓成功', 'SOL 风控拦截'] },
    { id: 2, name: 'Delta Wave', style: '波段', status: 'paused', invested: 12000, exposure: 7600, unrealized: -120.33, realized: 980.15, riskUsage: 0.81, symbols: 3, successRate: 0.85, executionAddress: '0xC91...a02', rules: '中频策略，优先主流币', perSymbolLimit: 5000, maxInvested: 15000, executions: ['XRP 部分成交', 'BTC 执行失败', 'ETH 平仓成功'] }
  ],
  positions: [
    { symbol: 'BTC', direction: 'long', source: 'Alpha Orion', status: 'synced', value: 12000, avg: 64010, mark: 65200, unrealized: 230.4, leverage: '5x', marginMode: 'cross', marginUsed: 2400, leaderAction: '加仓 0.08 BTC', actual: '成功执行 0.08 BTC', deviation: '无偏差' },
    { symbol: 'ETH', direction: 'short', source: 'Delta Wave', status: 'executeFailed', value: 5300, avg: 3180, mark: 3222, unrealized: -110.3, leverage: '3x', marginMode: 'cross', marginUsed: 1766, leaderAction: '开空 4 ETH', actual: '仅成交 2.5 ETH', deviation: '滑点与限价保护' }
  ]
};

function t(path) {
  return path.split('.').reduce((acc, k) => acc?.[k], dictionaries[state.locale]) || path;
}

function formatNumber(value, options = {}) {
  return new Intl.NumberFormat(state.locale, { maximumFractionDigits: 2, ...options }).format(value);
}
function formatCurrency(value) {
  return new Intl.NumberFormat(state.locale, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
}
function formatPercent(value) {
  return new Intl.NumberFormat(state.locale, { style: 'percent', maximumFractionDigits: 2 }).format(value);
}
function formatDate(value) {
  return new Intl.DateTimeFormat(state.locale, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
}

function statusTag(type, text) { return `<span class="tag ${type}">${text}</span>`; }
function pnlClass(v) { return v >= 0 ? 'pos' : 'neg'; }

function riskMeta() {
  const mapping = {
    executionFailed: { label: t('risk.executionFailed'), tab: 'records' },
    warning: { label: t('risk.warning'), tab: 'positions' },
    traderPaused: { label: t('risk.traderPaused'), tab: 'traders' },
    normal: { label: t('risk.normal'), tab: 'traders' }
  };
  return mapping[mock.risk] || mapping.normal;
}

function render() {
  const app = document.getElementById('app');
  const risk = riskMeta();
  app.innerHTML = `
    <div class="page">
      <div class="top-fixed">
        ${PortfolioHeader()}
        ${PortfolioOverviewCard()}
        <button class="risk-banner" data-jump="${risk.tab}">
          <span>${risk.label}</span>
          <span>${t('risk.cta')}</span>
        </button>
        ${PortfolioStickyTabs()}
      </div>
      <main class="content">${renderTab()}</main>
      ${state.drawerTrader ? TraderSettingsDrawer(state.drawerTrader) : ''}
    </div>`;

  app.querySelectorAll('[data-tab]').forEach((el) => el.onclick = () => { state.tab = el.dataset.tab; render(); });
  app.querySelector('[data-jump]')?.addEventListener('click', (e) => { state.tab = e.currentTarget.dataset.jump; render(); });
  app.querySelector('#locale-select')?.addEventListener('change', (e) => { state.locale = e.target.value; render(); });
  app.querySelector('#address-switch')?.addEventListener('click', () => alert(t('header.refresh')));
  app.querySelectorAll('[data-open-drawer]').forEach((el) => el.onclick = () => { state.drawerTrader = Number(el.dataset.openDrawer); render(); });
  app.querySelectorAll('[data-close-drawer]').forEach((el) => el.onclick = () => { state.drawerTrader = null; render(); });
  app.querySelectorAll('[data-confirm-action]').forEach((el) => el.onclick = () => {
    const isPause = el.dataset.confirmAction === 'pause';
    if (confirm(isPause ? t('trader.pauseConfirm') : t('trader.stopConfirm'))) alert(t('common.confirm'));
  });
  app.querySelectorAll('[data-record-tab]').forEach((el) => el.onclick = () => { state.recordsSubTab = el.dataset.recordTab; render(); });
}

function PortfolioHeader() {
  return `<header class="header card">
    <div><h1>${t('page.title')}</h1><p>${t('header.account')}: ${mock.account.short}</p></div>
    <div class="toolbar">
      <button id="address-switch">${t('header.switchAddress')}</button>
      <button>${t('header.filter')}</button>
      <button>${t('header.settings')}</button>
      <label>${t('common.locale')}
        <select id="locale-select">${Object.keys(dictionaries).map((lc) => `<option value="${lc}" ${state.locale === lc ? 'selected' : ''}>${lc}</option>`).join('')}</select>
      </label>
    </div>
  </header>`;
}

function PortfolioOverviewCard() {
  const o = mock.overview;
  return `<section class="card overview">
    <div class="hero"><p>${t('overview.totalEquity')}</p><strong>${formatCurrency(o.totalEquity)}</strong><small>${t('page.oneWayHint')}</small></div>
    <div class="metrics">
      ${metric(t('overview.dailyPnl'), o.dailyPnl, true)}
      ${metric(t('overview.unrealizedPnl'), o.unrealizedPnl, true)}
      ${metric(t('overview.realizedPnl'), o.realizedPnl, true)}
      ${metric(t('overview.usedMargin'), o.usedMargin)}
      ${metric(t('overview.freeMargin'), o.freeMargin)}
      ${metric(t('overview.activeTraders'), o.activeTraders, false, true)}
      ${metric(t('overview.symbols'), o.symbols, false, true)}
    </div>
  </section>`;
}
function metric(label, value, pnl = false, int = false) {
  const formatted = int ? formatNumber(value, { maximumFractionDigits: 0 }) : formatCurrency(value);
  return `<div class="metric"><span>${label}</span><b class="${pnl ? pnlClass(value) : ''}">${formatted}</b></div>`;
}
function PortfolioStickyTabs() {
  return `<nav class="tabs">${['traders', 'positions', 'records', 'funds'].map((k) => `<button data-tab="${k}" class="${state.tab === k ? 'active' : ''}">${t(`tabs.${k}`)}</button>`).join('')}</nav>`;
}
function renderTab() {
  if (state.tab === 'traders') return TraderCardList();
  if (state.tab === 'positions') return NetPositionsList();
  if (state.tab === 'records') return RecordsTabContainer();
  return FundsPanel();
}
function TraderCardList() {
  if (!mock.traders.length) return EmptyState(t('trader.noTrader'));
  return `<section class="stack">${mock.traders.map(TraderCard).join('')}</section>`;
}
function TraderCard(tr) {
  return `<article class="card trader">
    <div class="row between"><h3>${tr.name}</h3>${statusTag(tr.status, t(`trader.${tr.status}`))}</div>
    <p>${t('trader.style')}: ${tr.style}</p>
    <div class="grid-2">${[
      [t('trader.invested'), formatCurrency(tr.invested)],
      [t('trader.netExposure'), formatCurrency(tr.exposure)],
      [t('overview.unrealizedPnl'), `<span class="${pnlClass(tr.unrealized)}">${formatCurrency(tr.unrealized)}</span>`],
      [t('overview.realizedPnl'), `<span class="${pnlClass(tr.realized)}">${formatCurrency(tr.realized)}</span>`],
      [t('trader.riskUsage'), formatPercent(tr.riskUsage)],
      [t('trader.symbolCount'), formatNumber(tr.symbols)],
      [t('trader.executionRate'), formatPercent(tr.successRate)]
    ].map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>
    <details>
      <summary>${t('common.viewDetails')}</summary>
      <div class="expanded">
        <p>${t('trader.executionAddress')}: ${tr.executionAddress}</p>
        <p>${t('trader.ruleSummary')}: ${tr.rules}</p>
        <p>${t('trader.symbolLimit')}: ${formatCurrency(tr.perSymbolLimit)}</p>
        <p>${t('trader.maxInvested')}: ${formatCurrency(tr.maxInvested)}</p>
        <ul>${tr.executions.map((x) => `<li>${x}</li>`).join('')}</ul>
      </div>
    </details>
    <div class="actions">
      <button>${t('common.viewDetails')}</button>
      <button data-open-drawer="${tr.id}">${t('common.adjust')}</button>
      <button data-confirm-action="pause">${t('common.pause')}</button>
      <button class="danger" data-confirm-action="stop">${t('common.stop')}</button>
    </div>
  </article>`;
}
function TraderSettingsDrawer(id) {
  const tr = mock.traders.find((x) => x.id === id);
  return `<div class="drawer-mask" data-close-drawer="1"><aside class="drawer" onclick="event.stopPropagation()"><h3>${t('trader.drawerTitle')} · ${tr.name}</h3><p>${t('trader.ruleSummary')}: ${tr.rules}</p><button data-close-drawer="1">${t('common.cancel')}</button></aside></div>`;
}
function NetPositionsList() {
  if (!mock.positions.length) return EmptyState(t('positions.noPosition'));
  return `<section class="stack">${mock.positions.map((p) => `<article class="card"><div class="row between"><h3>${p.symbol}</h3>${statusTag(p.status, t(`positions.${p.status}`))}</div>
      <div class="grid-2">${[
        [t('positions.direction'), t(`positions.${p.direction}`)],
        [t('positions.source'), p.source],
        [t('positions.value'), formatCurrency(p.value)],
        [t('positions.avgPrice'), formatCurrency(p.avg)],
        [t('positions.markPrice'), formatCurrency(p.mark)],
        [t('overview.unrealizedPnl'), `<span class="${pnlClass(p.unrealized)}">${formatCurrency(p.unrealized)}</span>`],
        [t('positions.leverage'), p.leverage],
        [t('positions.marginMode'), t(`positions.${p.marginMode}`)],
        [t('positions.marginUsed'), formatCurrency(p.marginUsed)],
        [t('positions.leaderAction'), p.leaderAction],
        [t('positions.actualResult'), p.actual],
        [t('positions.deviation'), p.deviation]
      ].map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>
      <div class="actions"><button>${t('common.reduce')}</button><button class="danger">${t('common.close')}</button><button>${t('common.viewExecution')}</button></div></article>`).join('')}</section>`;
}
function RecordsTabContainer() {
  const sub = state.recordsSubTab;
  return `<section class="card"><div class="subtabs">${['execution', 'trade', 'orders'].map((k) => `<button data-record-tab="${k}" class="${sub === k ? 'active' : ''}">${t(`records.subTabs.${k}`)}</button>`).join('')}</div>
  <div class="filters">${['all', 'success', 'partial', 'failed'].map((k) => `<button class="${state.filterResult === k ? 'active' : ''}">${t(`common.${k}`)}</button>`).join('')}</div>
  ${sub === 'execution' ? ExecutionRecordsList() : sub === 'trade' ? TradeHistoryList() : OrderHistoryList()}</section>`;
}
function ExecutionRecordsList() {
  const rows = [{ time: '2026-04-14T08:20:00Z', action: '开多', symbol: 'BTC', theoretical: '开多 0.08', actual: '开多 0.08', result: 'success', reason: '-' }];
  if (!rows.length) return EmptyState(t('records.noExecution'));
  return `<div class="list">${rows.map((r) => `<div class="item"><b>${formatDate(r.time)}</b><span>${r.symbol}</span><span>${r.action}</span><span>${r.theoretical} / ${r.actual}</span>${statusTag(r.result, t(`common.${r.result}`))}<small>${t('records.reason')}: ${r.reason}</small></div>`).join('')}</div>`;
}
function TradeHistoryList() {
  const rows = [{ symbol: 'ETH', side: 'Short', openTime: '2026-04-12T05:10:00Z', closeTime: '2026-04-13T11:44:00Z', openPrice: 3200, closePrice: 3090, realized: 440.1, source: 'Delta Wave', closeReason: '止盈' }];
  if (!rows.length) return EmptyState(t('records.noTrade'));
  return `<div class="list">${rows.map((r) => `<div class="item"><b>${r.symbol}</b><span>${r.side}</span><span>${formatDate(r.openTime)} → ${formatDate(r.closeTime)}</span><span>${formatCurrency(r.openPrice)} / ${formatCurrency(r.closePrice)}</span><span class="${pnlClass(r.realized)}">${formatCurrency(r.realized)}</span><small>${t('records.sourceTrader')}: ${r.source} · ${t('records.closeReason')}: ${r.closeReason}</small></div>`).join('')}</div>`;
}
function OrderHistoryList() {
  const rows = [{ time: '2026-04-13T03:01:00Z', symbol: 'SOL', type: 'Limit', side: 'Buy', qty: 32, status: 'success', source: 'Alpha Orion' }];
  if (!rows.length) return EmptyState(t('records.noOrders'));
  return `<div class="list">${rows.map((r) => `<div class="item"><b>${formatDate(r.time)}</b><span>${r.symbol}</span><span>${r.type}</span><span>${r.side} ${formatNumber(r.qty)}</span>${statusTag(r.status, t(`common.${r.status}`))}<small>${t('records.source')}: ${r.source}</small></div>`).join('')}</div>`;
}
function FundsPanel() {
  return `<section class="stack"><article class="card"><h3>${t('funds.overview')}</h3><div class="grid-2">${[
    [t('funds.accountBalance'), formatCurrency(91231.4)],
    [t('funds.withdrawable'), formatCurrency(37019.2)],
    [t('overview.usedMargin'), formatCurrency(54212.2)],
    [t('overview.freeMargin'), formatCurrency(70211.25)]
  ].map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div></article>
  <article class="card"><h3>${t('funds.actions')}</h3><div class="actions"><button>${t('funds.deposit')}</button><button>${t('funds.withdraw')}</button><button>${t('funds.transfer')}</button></div></article>
  <article class="card"><h3>${t('funds.addressList')}</h3><div class="list"><div class="item"><b>Primary-01</b><span>${t('funds.note')}: Main copy account</span><span>${t('funds.createdAt')}: ${formatDate('2025-11-01T01:00:00Z')}</span><span>${t('funds.totalValue')}: ${formatCurrency(48210.32)}</span><span>${t('funds.status')}: Active</span><div class="actions"><button>${t('common.view')}</button><button>${t('common.switch')}</button><button>${t('common.more')}</button></div></div></div></article>
  <article class="card"><h3>${t('funds.history')}</h3><div class="list"><div class="item"><b>${formatDate('2026-04-14T07:12:00Z')}</b><span>${t('funds.type')}: Transfer</span><span>${t('funds.amount')}: ${formatCurrency(8000)}</span><span>${t('funds.balanceChange')}: +${formatCurrency(8000)}</span></div></div></article></section>`;
}
function EmptyState(text) { return `<div class="card state">${text}</div>`; }
render();
