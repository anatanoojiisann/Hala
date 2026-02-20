# Trader Profile Demo (MVP)

SuperX 风格的交易员画像可点击演示，支持：评估交易员 → 下钻验证 → 追踪/发起跟单 → 回测验证。

新增：右侧 AI Action Card（Trader Risk → AI Analysis）支持“AI 结论驱动 → 套用模板 → 开启跟单 → 模拟成交”的端到端链路。

## 运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## Demo 字段口径（简化）

- ROI: 时间窗口内收益率。
- MDD: 时间窗口内峰值到谷值最大回撤。
- Profit Factor: 总盈利 / 总亏损绝对值。
- 交易频率: 平均每日交易次数。
- 胜率: 盈利笔数 / 总平仓笔数。
- 平均持仓时间: 平仓交易平均持仓时长。
- 方向偏好: 做多成交占比（其余为做空）。

## AI 规则口径（Demo 规则引擎）

- 机会等级：ROI、PF、交易频率加权得分。
- 翻车风险：MDD、保证金使用率、最近活跃度加权得分。
- 可复制性：胜率、样本交易数、持仓稳定性推断。
- 低置信度触发：关键指标缺失或样本交易不足（模板按钮禁用并提示观察 7D）。

## 可演示埋点事件

- `impression`：AI 卡曝光
- `expand` / `why_open`：展开分析与证据
- `template_click`：点击模板
- `submit` / `copy_started`：提交并开启跟单
- `trade_filled`：模拟成交

> 所有数据均为 mock，用于演示流程，不代表真实收益或真实执行结果。
