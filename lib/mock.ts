export type MetricsWindow = '7D' | '30D' | 'ALL'

export type TraderMetrics = {
  roiPct?: number
  maxDrawdownPct?: number
  profitFactor?: number
  avgTradesPerDay?: number
  winRatePct?: number
  avgHoldHours?: number
  longBiasPct?: number
}

export type TradeRow = {
  openedAt: string
  symbol: string
  side: 'LONG' | 'SHORT'
  leverage?: number
  pnl: number
  entryPrice?: number
  exitPrice?: number
  fillsCount?: number
  maxMarginUsed?: number
  durationMins?: number
}

export type CopyGuardParams = {
  maxLeverage: number
  maxPositionPct: number
  maxSlippageBps: number
  pauseAfterLosses: number
  pauseAtDrawdownPct: number
}

export type TemplateId = 'CONSERVATIVE' | 'BALANCED' | 'AGGRESSIVE'

export type SmartCopyTemplate = {
  id: TemplateId
  name: string
  note: string
  copyGuard: CopyGuardParams
  ratio: number
  amountUsd: number
}

export const trader = {
  address: '0xff3f...316d',
  trackingSinceDays: 124,
  lastTradeDaysAgo: 11,
  equity: 6712.65,
  marginUtilization: 0.042,
}

export const metricsByWindow: Record<MetricsWindow, TraderMetrics> = {
  '7D': {
    roiPct: 1.04,
    maxDrawdownPct: 5.43,
    profitFactor: 1.62,
    avgTradesPerDay: 2.4,
    winRatePct: 76,
    avgHoldHours: 7,
    longBiasPct: 50,
  },
  '30D': {},
  ALL: {
    roiPct: 91.37,
    maxDrawdownPct: 23.5,
    profitFactor: 1.12,
    avgTradesPerDay: 1.6,
    winRatePct: 62,
    avgHoldHours: 13,
    longBiasPct: 51,
  },
}

export const tradesByWindow: Record<MetricsWindow, TradeRow[]> = {
  '7D': [
    { openedAt: 'Nov 21, 6:06 PM', symbol: 'XPL', side: 'LONG', leverage: 10, pnl: -1000.95, entryPrice: 0.127, fillsCount: 7, durationMins: 131100 },
    { openedAt: 'Feb 6, 2:40 PM', symbol: 'HYPE', side: 'SHORT', pnl: 728.51, entryPrice: 34.229, exitPrice: 33.702, fillsCount: 3, durationMins: 17 },
    { openedAt: 'Feb 6, 2:33 PM', symbol: 'HYPE', side: 'LONG', pnl: 0, entryPrice: 34.269, exitPrice: 34.398, fillsCount: 2, durationMins: 1 },
  ],
  '30D': [],
  ALL: [
    { openedAt: 'Jan 20, 8:12 AM', symbol: 'BTC', side: 'LONG', leverage: 4, pnl: 4200, entryPrice: 43120, exitPrice: 45200, fillsCount: 12, durationMins: 1220 },
    { openedAt: 'Jan 18, 9:00 PM', symbol: 'ETH', side: 'SHORT', leverage: 3, pnl: -1400, entryPrice: 2899, exitPrice: 3020, fillsCount: 5, durationMins: 804 },
  ],
}

export const smartTemplates: SmartCopyTemplate[] = [
  {
    id: 'CONSERVATIVE',
    name: '保守模式',
    note: '低杠杆 + 严格回撤保护',
    ratio: 0.6,
    amountUsd: 80,
    copyGuard: { maxLeverage: 2, maxPositionPct: 12, maxSlippageBps: 8, pauseAfterLosses: 2, pauseAtDrawdownPct: 6 },
  },
  {
    id: 'BALANCED',
    name: '均衡模式',
    note: '默认推荐，收益/回撤平衡',
    ratio: 1,
    amountUsd: 120,
    copyGuard: { maxLeverage: 3, maxPositionPct: 20, maxSlippageBps: 12, pauseAfterLosses: 3, pauseAtDrawdownPct: 10 },
  },
  {
    id: 'AGGRESSIVE',
    name: '冲锋模式',
    note: '高频跟随，强制开启 CopyGuard',
    ratio: 1.6,
    amountUsd: 200,
    copyGuard: { maxLeverage: 4, maxPositionPct: 28, maxSlippageBps: 18, pauseAfterLosses: 2, pauseAtDrawdownPct: 12 },
  },
]

export const curve = [0, 0.2, 0.1, 0.38, 0.32, 0.61, 0.66, 0.82, 0.79, 0.81, 0.85, 0.8, 0.81, 0.81, 0.81]

export const aiRules = [
  '机会等级基于 ROI、PF、交易频率加权计算（demo 规则）',
  '翻车风险基于 MDD、杠杆偏好、最近活跃度评估（demo 规则）',
  '可复制性基于样本数、平均持仓时长与胜率（demo 规则）',
]
