const dictionaries = {
  zh: {
    localeName: '中文',
    pageTitle: '我的跟单',
    myTraders: 'My Traders',
    netPositions: '当前净仓',
    records: '记录',
    funds: '资金',
    switchAddress: '切换地址',
    filter: '筛选',
    settings: '设置',
    refresh: '刷新',
    modeHint: '当前为单向净仓跟单',
    totalEquity: '跟单总权益',
    todayPnl: '今日 PnL',
    unrealizedPnl: '当前未实现 PnL',
    realizedPnl: '累计已实现 PnL',
    usedMargin: '已用保证金',
    freeMargin: '可用保证金',
    traderCount: '跟单中 Trader 数',
    symbolCount: '当前持仓币种数',
    riskNormal: '风险正常',
    riskExecutionFailure: '执行失败提示',
    riskWarning: '风险预警提示',
    riskTraderPaused: 'Trader 暂停提示',
    jumpNow: '点击前往',
    traderName: 'Trader',
    styleTag: '风格',
    status: '状态',
    statusFollowing: '跟单中',
    statusPaused: '已暂停',
    statusStopped: '已停止',
    statusFrozen: '风险冻结',
    statusSynced: '已同步',
    statusPartial: '部分同步',
    statusFailed: '执行失败',
    invested: '我的总投入',
    exposure: '当前净敞口',
    riskBudget: '风险预算使用率',
    linkedSymbols: '当前关联币种数',
    success24h: '最近 24h 执行成功率',
    viewDetail: '查看详情',
    adjustSettings: '调整设置',
    pause: '暂停',
    stopCopy: '停止跟单',
    executionAddress: '执行地址',
    ruleSummary: '跟单规则摘要',
    symbolLimit: '单币种上限',
    maxInvested: '最大总投入',
    latest3Exec: '最近 3 条执行记录',
    reduce: '减仓',
    close: '平仓',
    viewExec: '查看执行记录',
    netValue: '净仓位价值',
    avgOpen: '平均开仓价',
    markPrice: '标记价',
    leverage: '杠杆',
    marginMode: '保证金模式',
    occupiedMargin: '占用保证金',
    lastLeaderAction: '最近一次 leader 动作',
    myExecution: '我方实际执行结果',
    deviation: '偏差原因摘要',
    directionLong: 'Long',
    directionShort: 'Short',
    directionFlat: 'Flat',
    subExecution: '执行记录',
    subTrades: '交易历史',
    subOrders: '历史订单',
    all: '全部',
    success: '成功',
    partialFill: '部分成交',
    failed: '失败',
    time: '时间',
    traderAction: 'Trader 动作',
    symbol: '币种',
    theoretical: '理论动作',
    actual: '实际执行',
    result: '结果',
    reason: '原因说明',
    side: '方向',
    openTime: '开仓时间',
    closeTime: '平仓时间',
    openPrice: '开仓价',
    closePrice: '平仓价',
    sourceTrader: '来源 Trader',
    closeReason: '关闭原因',
    orderTime: '下单时间',
    orderType: '订单类型',
    quantity: '数量',
    source: '来源',
    fundsOverview: '资金总览',
    accountBalance: '当前账户余额',
    withdrawable: '可提现',
    fundsActions: '资金操作',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    transfer: '划转',
    addressList: '地址列表',
    alias: '地址简称',
    note: '备注',
    createdAt: '创建时间',
    accountValue: '账户总值',
    actions: '操作',
    view: '查看',
    switch: '切换',
    more: '更多',
    fundsRecords: '资金记录',
    type: '类型',
    amount: '金额',
    balanceChange: '余额变化',
    loading: '加载中...',
    error: '加载失败，请重试',
    emptyTraders: '暂无跟单中的 Trader',
    emptyPositions: '当前暂无净仓位',
    emptyExecution: '暂无执行记录',
    emptyTrades: '暂无历史交易',
    emptyOrders: '暂无历史订单',
    emptyFunds: '暂无资金记录',
    confirmPause: '确认暂停该 Trader 跟单？',
    confirmStop: '确认停止该 Trader 跟单？',
    settingsTitle: 'Trader 设置',
    netPositionsTable: '净仓位表格',
    desktopOptional: '桌面端可选',
    typeDeposit: '充值',
    typeWithdraw: '提现',
    save: '保存',
    cancel: '取消',
    noData: '暂无数据'
  }
};

['en', 'ru', 'ko', 'ja', 'uz', 'vi', 'fr'].forEach((l) => {
  dictionaries[l] = { ...dictionaries.zh, localeName: l.toUpperCase() };
});

Object.assign(dictionaries.en, {
  pageTitle: 'My Copy Trading',
  myTraders: 'My Traders',
  netPositions: 'Net Positions',
  records: 'Records',
  funds: 'Funds',
  switchAddress: 'Switch Address',
  filter: 'Filter',
  settings: 'Settings',
  refresh: 'Refresh',
  modeHint: 'Current mode: one-way net position copy trading',
  jumpNow: 'Click to open',
  settingsTitle: 'Trader Settings',
  confirmPause: 'Pause copying this trader?',
  confirmStop: 'Stop copying this trader?',
  deposit: 'Deposit',
  withdraw: 'Withdraw',
  transfer: 'Transfer',
  netPositionsTable: 'Net Positions Table',
  desktopOptional: 'Desktop optional',
  typeDeposit: 'Deposit',
  typeWithdraw: 'Withdraw'
});

Object.assign(dictionaries.ru, { pageTitle: 'Мое копирование', myTraders: 'Мои трейдеры', netPositions: 'Нетто-позиции', records: 'Записи', funds: 'Средства', switchAddress: 'Сменить адрес', filter: 'Фильтр', settings: 'Настройки', refresh: 'Обновить', modeHint: 'Текущий режим: однонаправленное нетто-копирование', jumpNow: 'Перейти', deposit: 'Депозит', withdraw: 'Вывод', transfer: 'Перевод', netPositionsTable: 'Таблица нетто-позиций', desktopOptional: 'Опция для десктопа', typeDeposit: 'Депозит', typeWithdraw: 'Вывод' });
Object.assign(dictionaries.ko, { pageTitle: '내 카피트레이딩', myTraders: '내 트레이더', netPositions: '현재 순포지션', records: '기록', funds: '자금', switchAddress: '주소 전환', filter: '필터', settings: '설정', refresh: '새로고침', modeHint: '현재 모드: 단방향 순포지션 카피트레이딩', jumpNow: '이동', deposit: '입금', withdraw: '출금', transfer: '이체', netPositionsTable: '순포지션 표', desktopOptional: '데스크톱 옵션', typeDeposit: '입금', typeWithdraw: '출금' });
Object.assign(dictionaries.ja, { pageTitle: 'マイコピートレード', myTraders: 'マイトレーダー', netPositions: '現在のネットポジション', records: '記録', funds: '資金', switchAddress: 'アドレス切替', filter: 'フィルター', settings: '設定', refresh: '更新', modeHint: '現在モード：一方向ネットポジションのコピー取引', jumpNow: '移動', deposit: '入金', withdraw: '出金', transfer: '振替', netPositionsTable: 'ネットポジション表', desktopOptional: 'デスクトップ向け', typeDeposit: '入金', typeWithdraw: '出金' });
Object.assign(dictionaries.uz, { pageTitle: 'Mening Copy Tradingim', myTraders: 'Mening treyderlarim', netPositions: 'Joriy net pozitsiyalar', records: 'Yozuvlar', funds: 'Mablag‘lar', switchAddress: 'Manzilni almashtirish', filter: 'Filtr', settings: 'Sozlamalar', refresh: 'Yangilash', modeHint: 'Joriy rejim: bir yo‘nalishli net pozitsiya copy trading', jumpNow: 'O‘tish', deposit: 'Depozit', withdraw: 'Yechib olish', transfer: 'O‘tkazma', netPositionsTable: 'Net pozitsiyalar jadvali', desktopOptional: 'Desktop varianti', typeDeposit: 'Depozit', typeWithdraw: 'Yechib olish' });
Object.assign(dictionaries.vi, { pageTitle: 'Sao chép giao dịch của tôi', myTraders: 'Nhà giao dịch của tôi', netPositions: 'Vị thế ròng hiện tại', records: 'Bản ghi', funds: 'Quỹ', switchAddress: 'Chuyển địa chỉ', filter: 'Bộ lọc', settings: 'Cài đặt', refresh: 'Làm mới', modeHint: 'Chế độ hiện tại: copy trading vị thế ròng một chiều', jumpNow: 'Đi tới', deposit: 'Nạp tiền', withdraw: 'Rút tiền', transfer: 'Chuyển khoản', netPositionsTable: 'Bảng vị thế ròng', desktopOptional: 'Tùy chọn desktop', typeDeposit: 'Nạp tiền', typeWithdraw: 'Rút tiền' });
Object.assign(dictionaries.fr, { pageTitle: 'Mon Copy Trading', myTraders: 'Mes traders', netPositions: 'Positions nettes', records: 'Historique', funds: 'Fonds', switchAddress: 'Changer d’adresse', filter: 'Filtre', settings: 'Paramètres', refresh: 'Actualiser', modeHint: 'Mode actuel : copy trading en position nette unidirectionnelle', jumpNow: 'Aller', deposit: 'Dépôt', withdraw: 'Retrait', transfer: 'Transfert', netPositionsTable: 'Table des positions nettes', desktopOptional: 'Option desktop', typeDeposit: 'Dépôt', typeWithdraw: 'Retrait' });

const state = {
  locale: 'zh',
  activeTab: 'traders',
  activeRecordSubTab: 'execution',
  filter: 'all',
  loading: false,
  error: false,
  drawerTrader: null,
  expandedTraders: {}
};

const data = {
  accountAlias: 'Main-0x8A3F',
  overview: {
    totalEquity: 128493.33,
    todayPnl: 1832.55,
    unrealizedPnl: -332.8,
    realizedPnl: 15772.1,
    usedMargin: 28491.2,
    freeMargin: 93110.6,
    traderCount: 4,
    symbolCount: 9
  },
  risk: { level: 'execution_failure', targetTab: 'records' },
  traders: [
    {
      id: 't1', name: 'AlphaWave', style: 'Trend', status: 'following', invested: 40000, exposure: 18220,
      unrealizedPnl: 423.22, realizedPnl: 5912.4, riskBudget: 0.56, linkedSymbols: 5, success24h: 0.92,
      executionAddress: '0xA93...1CD', ruleSummary: 'One-way BTC/ETH majors', symbolLimit: 12000, maxInvested: 50000,
      recentExec: ['BTC Long +12k', 'ETH Reduce -4k', 'SOL Long +2k']
    },
    {
      id: 't2', name: 'DeltaGrid', style: 'Mean Reversion', status: 'paused', invested: 25000, exposure: 8340,
      unrealizedPnl: -232.9, realizedPnl: 3201.88, riskBudget: 0.73, linkedSymbols: 3, success24h: 0.67,
      executionAddress: '0xD19...9EF', ruleSummary: 'Low leverage majors', symbolLimit: 9000, maxInvested: 28000,
      recentExec: ['XRP Flat', 'BTC Partial fill', 'ETH blocked by risk']
    }
  ],
  netPositions: [
    { symbol: 'BTC', direction: 'long', trader: 'AlphaWave', status: 'synced', netValue: 12031, avgOpen: 61234, markPrice: 61712, unrealizedPnl: 291.2, leverage: '3x', marginMode: 'Cross', occupiedMargin: 4010, leaderAction: 'Increase long +2%', myExecution: 'Filled', deviation: 'No deviation' },
    { symbol: 'ETH', direction: 'short', trader: 'DeltaGrid', status: 'partial', netValue: 4220, avgOpen: 3220, markPrice: 3251, unrealizedPnl: -102.2, leverage: '2x', marginMode: 'Isolated', occupiedMargin: 2100, leaderAction: 'Add short +1.2%', myExecution: 'Partially filled', deviation: 'Insufficient free margin' }
  ],
  executionRecords: [
    { time: Date.now() - 360000, action: 'Add long', symbol: 'BTC', theoretical: 'Buy 0.12', actual: 'Buy 0.12', result: 'success', reason: 'Matched in 8ms' },
    { time: Date.now() - 720000, action: 'Add short', symbol: 'ETH', theoretical: 'Sell 1.9', actual: 'Sell 1.1', result: 'partial', reason: 'Liquidity gap' },
    { time: Date.now() - 920000, action: 'Close', symbol: 'SOL', theoretical: 'Sell 300', actual: '--', result: 'failed', reason: 'Risk control intercept' }
  ],
  tradeHistory: [
    { symbol: 'BTC', side: 'Long', openTime: Date.now() - 86000000, closeTime: Date.now() - 4200000, openPrice: 60221, closePrice: 61610, realizedPnl: 611.2, trader: 'AlphaWave', closeReason: 'Leader close' }
  ],
  orderHistory: [
    { orderTime: Date.now() - 520000, symbol: 'ETH', orderType: 'Market', side: 'Sell', quantity: '1.1', status: 'Filled', source: 'Copy Engine' }
  ],
  fundsOverview: { balance: 128493.33, withdrawable: 93110.6, usedMargin: 28491.2, freeMargin: 93110.6 },
  addresses: [
    { alias: 'Main-0x8A3F', note: 'Primary account', createdAt: Date.now() - 4400000000, accountValue: 128493.33, status: 'Active' },
    { alias: 'Sub-0x9BCD', note: 'High beta basket', createdAt: Date.now() - 2200000000, accountValue: 32112.9, status: 'Active' }
  ],
  fundsHistory: [
    { time: Date.now() - 8200000, type: 'Deposit', amount: 10000, balanceChange: '+10000' },
    { time: Date.now() - 4200000, type: 'Withdraw', amount: 1200, balanceChange: '-1200' }
  ]
};

const riskPriority = ['execution_failure', 'warning', 'trader_paused', 'normal'];

const t = (k) => dictionaries[state.locale][k] || dictionaries.zh[k] || k;
const fmtNum = (v, o = {}) => new Intl.NumberFormat(state.locale, { maximumFractionDigits: 2, ...o }).format(v);
const fmtPct = (v) => new Intl.NumberFormat(state.locale, { style: 'percent', maximumFractionDigits: 2 }).format(v);
const fmtDateTime = (v) => new Intl.DateTimeFormat(state.locale, { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(v));

function statusTag(status) {
  const map = {
    following: ['statusFollowing', 'success'], paused: ['statusPaused', 'warning'], stopped: ['statusStopped', 'muted'], frozen: ['statusFrozen', 'danger'],
    synced: ['statusSynced', 'success'], partial: ['statusPartial', 'warning'], failed: ['statusFailed', 'danger'],
    success: ['success', 'success'], partialFill: ['partialFill', 'warning']
  };
  const [key, cls] = map[status] || [status, 'muted'];
  return `<span class="tag ${cls}">${t(key)}</span>`;
}

function metric(label, value, cls = '') {
  return `<div class="metric ${cls}"><div class="label">${t(label)}</div><div class="value">${value}</div></div>`;
}

function renderHeader() {
  return `<div class="card page-header"><div class="header-left"><h1 class="page-title">${t('pageTitle')}</h1><span class="account-chip">${data.accountAlias}</span></div><div class="header-right"><label>${t('filter')} <select id="locale-select">${Object.keys(dictionaries).map((k) => `<option value="${k}" ${state.locale === k ? 'selected' : ''}>${dictionaries[k].localeName}</option>`).join('')}</select></label><button id="switch-address">${t('switchAddress')}</button><button>${t('settings')}</button><button id="refresh-btn">${t('refresh')}</button></div></div>`;
}

function renderOverview() {
  const o = data.overview;
  return `<div class="card overview">
    <div class="row"><strong>${t('totalEquity')}</strong><span class="hint">${t('modeHint')}</span></div>
    <div class="overview-grid">
      ${metric('totalEquity', `$${fmtNum(o.totalEquity)}`, 'equity')}
      ${metric('todayPnl', `<span style="color:${o.todayPnl >= 0 ? 'var(--positive)' : 'var(--negative)'}">${o.todayPnl >= 0 ? '+' : ''}$${fmtNum(o.todayPnl)}</span>`)}
      ${metric('unrealizedPnl', `<span style="color:${o.unrealizedPnl >= 0 ? 'var(--positive)' : 'var(--negative)'}">${o.unrealizedPnl >= 0 ? '+' : ''}$${fmtNum(o.unrealizedPnl)}</span>`)}
      ${metric('realizedPnl', `<span style="color:${o.realizedPnl >= 0 ? 'var(--positive)' : 'var(--negative)'}">${o.realizedPnl >= 0 ? '+' : ''}$${fmtNum(o.realizedPnl)}</span>`)}
      ${metric('usedMargin', `$${fmtNum(o.usedMargin)}`)}
      ${metric('freeMargin', `$${fmtNum(o.freeMargin)}`)}
      ${metric('traderCount', fmtNum(o.traderCount, { maximumFractionDigits: 0 }))}
      ${metric('symbolCount', fmtNum(o.symbolCount, { maximumFractionDigits: 0 }))}
    </div>
  </div>`;
}

function renderRiskBanner() {
  const current = riskPriority.find((key) => key === data.risk.level) || 'normal';
  const keyMap = {
    execution_failure: ['riskExecutionFailure', 'danger'], warning: ['riskWarning', 'warning'], trader_paused: ['riskTraderPaused', 'warning'], normal: ['riskNormal', 'info']
  };
  const [textKey, cls] = keyMap[current];
  return `<div id="risk-banner" class="card banner ${cls}"><div>${t(textKey)}</div><small>${t('jumpNow')}</small></div>`;
}

function renderTabs() {
  const tabs = [['traders', 'myTraders'], ['positions', 'netPositions'], ['records', 'records'], ['funds', 'funds']];
  return `<div class="tabs">${tabs.map(([k, l]) => `<div class="tab ${state.activeTab === k ? 'active' : ''}" data-tab="${k}">${t(l)}</div>`).join('')}</div>`;
}

function renderEmpty(key) { return `<div class="card empty">${t(key)}</div>`; }
function renderLoading() { return `<div class="card loading">${t('loading')}</div>`; }
function renderError() { return `<div class="card error">${t('error')}</div>`; }

function renderTraders() {
  if (state.loading) return renderLoading();
  if (state.error) return renderError();
  if (!data.traders.length) return renderEmpty('emptyTraders');
  return `<div class="trader-list">${data.traders.map((trader) => {
    const expanded = !!state.expandedTraders[trader.id];
    return `<div class="card trader-card"><div class="row"><div><strong>${trader.name}</strong> <span class="tag muted">${t('styleTag')}: ${trader.style}</span> ${statusTag(trader.status)}</div></div>
    <div class="kv-grid">
      <div class="kv-item"><div class="k">${t('invested')}</div><div class="v">$${fmtNum(trader.invested)}</div></div>
      <div class="kv-item"><div class="k">${t('exposure')}</div><div class="v">$${fmtNum(trader.exposure)}</div></div>
      <div class="kv-item"><div class="k">${t('unrealizedPnl')}</div><div class="v" style="color:${trader.unrealizedPnl >= 0 ? 'var(--positive)' : 'var(--negative)'}">${trader.unrealizedPnl >= 0 ? '+' : ''}$${fmtNum(trader.unrealizedPnl)}</div></div>
      <div class="kv-item"><div class="k">${t('realizedPnl')}</div><div class="v">$${fmtNum(trader.realizedPnl)}</div></div>
      <div class="kv-item"><div class="k">${t('riskBudget')}</div><div class="v">${fmtPct(trader.riskBudget)}</div></div>
      <div class="kv-item"><div class="k">${t('linkedSymbols')}</div><div class="v">${trader.linkedSymbols}</div></div>
      <div class="kv-item"><div class="k">${t('success24h')}</div><div class="v">${fmtPct(trader.success24h)}</div></div>
    </div>
    <div class="actions">
      <button data-expand="${trader.id}">${expanded ? '-' : '+'} ${t('viewDetail')}</button>
      <button class="primary" data-settings="${trader.id}">${t('adjustSettings')}</button>
      <button data-pause="${trader.id}">${t('pause')}</button>
      <button data-stop="${trader.id}">${t('stopCopy')}</button>
    </div>
    ${expanded ? `<div class="expand kv-grid">
      <div class="kv-item"><div class="k">${t('executionAddress')}</div><div class="v">${trader.executionAddress}</div></div>
      <div class="kv-item"><div class="k">${t('ruleSummary')}</div><div class="v">${trader.ruleSummary}</div></div>
      <div class="kv-item"><div class="k">${t('symbolLimit')}</div><div class="v">$${fmtNum(trader.symbolLimit)}</div></div>
      <div class="kv-item"><div class="k">${t('maxInvested')}</div><div class="v">$${fmtNum(trader.maxInvested)}</div></div>
      <div class="kv-item"><div class="k">${t('latest3Exec')}</div><div class="v">${trader.recentExec.join(' / ')}</div></div>
    </div>` : ''}</div>`;
  }).join('')}</div>`;
}

function renderPositions() {
  if (!data.netPositions.length) return renderEmpty('emptyPositions');
  return `<div class="position-list">${data.netPositions.map((p) => `<div class="card position-card"><div class="row"><strong>${p.symbol} · ${t(`direction${p.direction[0].toUpperCase()}${p.direction.slice(1)}`)}</strong><div>${statusTag(p.status)}</div></div>
    <div class="kv-grid">
      <div class="kv-item"><div class="k">${t('sourceTrader')}</div><div class="v">${p.trader}</div></div>
      <div class="kv-item"><div class="k">${t('netValue')}</div><div class="v">$${fmtNum(p.netValue)}</div></div>
      <div class="kv-item"><div class="k">${t('avgOpen')}</div><div class="v">$${fmtNum(p.avgOpen)}</div></div>
      <div class="kv-item"><div class="k">${t('markPrice')}</div><div class="v">$${fmtNum(p.markPrice)}</div></div>
      <div class="kv-item"><div class="k">${t('unrealizedPnl')}</div><div class="v" style="color:${p.unrealizedPnl >= 0 ? 'var(--positive)' : 'var(--negative)'}">${p.unrealizedPnl >= 0 ? '+' : ''}$${fmtNum(p.unrealizedPnl)}</div></div>
      <div class="kv-item"><div class="k">${t('leverage')}</div><div class="v">${p.leverage}</div></div>
      <div class="kv-item"><div class="k">${t('marginMode')}</div><div class="v">${p.marginMode}</div></div>
      <div class="kv-item"><div class="k">${t('occupiedMargin')}</div><div class="v">$${fmtNum(p.occupiedMargin)}</div></div>
      <div class="kv-item"><div class="k">${t('lastLeaderAction')}</div><div class="v">${p.leaderAction}</div></div>
      <div class="kv-item"><div class="k">${t('myExecution')}</div><div class="v">${p.myExecution}</div></div>
      <div class="kv-item"><div class="k">${t('deviation')}</div><div class="v">${p.deviation}</div></div>
    </div><div class="actions"><button>${t('reduce')}</button><button>${t('close')}</button><button>${t('viewExec')}</button></div></div>`).join('')}
    <div class="card section-card"><div class="row"><strong>${t('netPositionsTable')}</strong><span class="tag muted">${t('desktopOptional')}</span></div><div class="table-wrap"><table><thead><tr><th>${t('symbol')}</th><th>${t('side')}</th><th>${t('status')}</th><th>${t('netValue')}</th><th>${t('unrealizedPnl')}</th></tr></thead><tbody>${data.netPositions.map((p) => `<tr><td>${p.symbol}</td><td>${t(`direction${p.direction[0].toUpperCase()}${p.direction.slice(1)}`)}</td><td>${t(`status${p.status[0].toUpperCase()}${p.status.slice(1)}`) || p.status}</td><td>$${fmtNum(p.netValue)}</td><td style="color:${p.unrealizedPnl >= 0 ? 'var(--positive)' : 'var(--negative)'}">${p.unrealizedPnl >= 0 ? '+' : ''}$${fmtNum(p.unrealizedPnl)}</td></tr>`).join('')}</tbody></table></div></div>
  </div>`;
}

function renderRecords() {
  const subTabs = [['execution', 'subExecution'], ['trades', 'subTrades'], ['orders', 'subOrders']];
  let content = '';
  if (state.activeRecordSubTab === 'execution') {
    content = data.executionRecords.length ? `<div class="records-list">${data.executionRecords.map((r) => `<div class="card section-card"><div class="row"><strong>${r.symbol}</strong>${statusTag(r.result === 'partial' ? 'partialFill' : r.result)}</div><div class="kv-grid"><div class="kv-item"><div class="k">${t('time')}</div><div class="v">${fmtDateTime(r.time)}</div></div><div class="kv-item"><div class="k">${t('traderAction')}</div><div class="v">${r.action}</div></div><div class="kv-item"><div class="k">${t('theoretical')}</div><div class="v">${r.theoretical}</div></div><div class="kv-item"><div class="k">${t('actual')}</div><div class="v">${r.actual}</div></div><div class="kv-item"><div class="k">${t('reason')}</div><div class="v">${r.reason}</div></div></div></div>`).join('')}</div>` : renderEmpty('emptyExecution');
  } else if (state.activeRecordSubTab === 'trades') {
    content = data.tradeHistory.length ? `<div class="records-list">${data.tradeHistory.map((r) => `<div class="card section-card"><div class="row"><strong>${r.symbol}</strong><span style="color:${r.realizedPnl >= 0 ? 'var(--positive)' : 'var(--negative)'}">${r.realizedPnl >= 0 ? '+' : ''}$${fmtNum(r.realizedPnl)}</span></div><div class="kv-grid"><div class="kv-item"><div class="k">${t('side')}</div><div class="v">${r.side}</div></div><div class="kv-item"><div class="k">${t('openTime')}</div><div class="v">${fmtDateTime(r.openTime)}</div></div><div class="kv-item"><div class="k">${t('closeTime')}</div><div class="v">${fmtDateTime(r.closeTime)}</div></div><div class="kv-item"><div class="k">${t('openPrice')}</div><div class="v">$${fmtNum(r.openPrice)}</div></div><div class="kv-item"><div class="k">${t('closePrice')}</div><div class="v">$${fmtNum(r.closePrice)}</div></div><div class="kv-item"><div class="k">${t('sourceTrader')}</div><div class="v">${r.trader}</div></div><div class="kv-item"><div class="k">${t('closeReason')}</div><div class="v">${r.closeReason}</div></div></div></div>`).join('')}</div>` : renderEmpty('emptyTrades');
  } else {
    content = data.orderHistory.length ? `<div class="records-list">${data.orderHistory.map((r) => `<div class="card section-card"><div class="row"><strong>${r.symbol}</strong><span class="tag success">${r.status}</span></div><div class="kv-grid"><div class="kv-item"><div class="k">${t('orderTime')}</div><div class="v">${fmtDateTime(r.orderTime)}</div></div><div class="kv-item"><div class="k">${t('orderType')}</div><div class="v">${r.orderType}</div></div><div class="kv-item"><div class="k">${t('side')}</div><div class="v">${r.side}</div></div><div class="kv-item"><div class="k">${t('quantity')}</div><div class="v">${r.quantity}</div></div><div class="kv-item"><div class="k">${t('source')}</div><div class="v">${r.source}</div></div></div></div>`).join('')}</div>` : renderEmpty('emptyOrders');
  }
  return `<div><div class="toolbar"><span class="tag muted">${t('filter')}</span><button>${t('all')}</button><button>${t('success')}</button><button>${t('partialFill')}</button><button>${t('failed')}</button></div><div class="subtabs">${subTabs.map(([k, l]) => `<div class="tab ${state.activeRecordSubTab === k ? 'active' : ''}" data-record-tab="${k}">${t(l)}</div>`).join('')}</div>${content}</div>`;
}

function renderFunds() {
  const f = data.fundsOverview;
  return `<div class="funds-list"><div class="card section-card"><strong>${t('fundsOverview')}</strong><div class="kv-grid"><div class="kv-item"><div class="k">${t('accountBalance')}</div><div class="v">$${fmtNum(f.balance)}</div></div><div class="kv-item"><div class="k">${t('withdrawable')}</div><div class="v">$${fmtNum(f.withdrawable)}</div></div><div class="kv-item"><div class="k">${t('usedMargin')}</div><div class="v">$${fmtNum(f.usedMargin)}</div></div><div class="kv-item"><div class="k">${t('freeMargin')}</div><div class="v">$${fmtNum(f.freeMargin)}</div></div></div></div><div class="card section-card"><strong>${t('fundsActions')}</strong><div class="actions"><button>${t('deposit')}</button><button>${t('withdraw')}</button><button>${t('transfer')}</button></div></div><div class="card section-card"><div class="row"><strong>${t('addressList')}</strong></div><div class="table-wrap"><table><thead><tr><th>${t('alias')}</th><th>${t('note')}</th><th>${t('createdAt')}</th><th>${t('accountValue')}</th><th>${t('status')}</th><th>${t('actions')}</th></tr></thead><tbody>${data.addresses.map((a) => `<tr><td>${a.alias}</td><td>${a.note}</td><td>${fmtDateTime(a.createdAt)}</td><td>$${fmtNum(a.accountValue)}</td><td>${a.status}</td><td><button>${t('view')}</button> <button>${t('switch')}</button> <button>${t('more')}</button></td></tr>`).join('')}</tbody></table></div></div><div class="card section-card"><strong>${t('fundsRecords')}</strong>${data.fundsHistory.length ? `<div class="table-wrap"><table><thead><tr><th>${t('time')}</th><th>${t('type')}</th><th>${t('amount')}</th><th>${t('balanceChange')}</th></tr></thead><tbody>${data.fundsHistory.map((h) => `<tr><td>${fmtDateTime(h.time)}</td><td>${t(`type${h.type}`)}</td><td>$${fmtNum(h.amount)}</td><td>${h.balanceChange}</td></tr>`).join('')}</tbody></table></div>` : renderEmpty('emptyFunds')}</div></div>`;
}

function renderContent() {
  if (state.activeTab === 'traders') return renderTraders();
  if (state.activeTab === 'positions') return renderPositions();
  if (state.activeTab === 'records') return renderRecords();
  return renderFunds();
}

function renderDrawer() {
  const trader = data.traders.find((x) => x.id === state.drawerTrader);
  return `<div id="modal-backdrop" class="modal-backdrop ${trader ? 'open' : ''}"></div><aside class="drawer ${trader ? 'open' : ''}" id="settings-drawer">${trader ? `<div class="row"><strong>${t('settingsTitle')} · ${trader.name}</strong><button id="close-drawer">×</button></div><div class="kv-grid"><label class="kv-item"><div class="k">${t('symbolLimit')}</div><input style="width:100%" value="${trader.symbolLimit}"/></label><label class="kv-item"><div class="k">${t('maxInvested')}</div><input style="width:100%" value="${trader.maxInvested}"/></label><label class="kv-item"><div class="k">${t('riskBudget')}</div><input style="width:100%" value="${fmtPct(trader.riskBudget)}"/></label></div><div class="actions"><button class="primary">${t('save')}</button><button id="close-drawer-2">${t('cancel')}</button></div>` : ''}</aside>`;
}

function render() {
  document.getElementById('app').innerHTML = `<div class="page-shell"><div class="top-fixed">${renderHeader()}${renderOverview()}${renderRiskBanner()}${renderTabs()}</div><div class="content">${renderContent()}</div>${renderDrawer()}</div>`;

  document.querySelectorAll('[data-tab]').forEach((el) => el.addEventListener('click', () => { state.activeTab = el.dataset.tab; render(); }));
  document.querySelectorAll('[data-record-tab]').forEach((el) => el.addEventListener('click', () => { state.activeRecordSubTab = el.dataset.recordTab; render(); }));
  document.getElementById('locale-select')?.addEventListener('change', (e) => { state.locale = e.target.value; render(); });
  document.getElementById('refresh-btn')?.addEventListener('click', () => {
    state.loading = true; render();
    setTimeout(() => { state.loading = false; state.error = false; render(); }, 600);
  });
  document.getElementById('switch-address')?.addEventListener('click', () => {
    state.loading = true; render();
    setTimeout(() => {
      data.accountAlias = data.accountAlias.includes('Main') ? 'Sub-0x9BCD' : 'Main-0x8A3F';
      state.loading = false; render();
    }, 700);
  });
  document.getElementById('risk-banner')?.addEventListener('click', () => {
    if (data.risk.targetTab) state.activeTab = data.risk.targetTab;
    render();
  });

  document.querySelectorAll('[data-expand]').forEach((el) => el.addEventListener('click', () => {
    const id = el.dataset.expand;
    state.expandedTraders[id] = !state.expandedTraders[id];
    render();
  }));
  document.querySelectorAll('[data-settings]').forEach((el) => el.addEventListener('click', () => {
    state.drawerTrader = el.dataset.settings;
    render();
  }));
  document.getElementById('close-drawer')?.addEventListener('click', () => { state.drawerTrader = null; render(); });
  document.getElementById('close-drawer-2')?.addEventListener('click', () => { state.drawerTrader = null; render(); });
  document.getElementById('modal-backdrop')?.addEventListener('click', () => { state.drawerTrader = null; render(); });

  document.querySelectorAll('[data-pause]').forEach((el) => el.addEventListener('click', () => {
    if (window.confirm(t('confirmPause'))) {
      const tr = data.traders.find((x) => x.id === el.dataset.pause);
      if (tr) tr.status = 'paused';
      render();
    }
  }));

  document.querySelectorAll('[data-stop]').forEach((el) => el.addEventListener('click', () => {
    if (window.confirm(t('confirmStop'))) {
      const tr = data.traders.find((x) => x.id === el.dataset.stop);
      if (tr) tr.status = 'stopped';
      render();
    }
  }));
}

render();
