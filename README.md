# Trader Profile Demo (MVP)

A clickable React demo for **Trader Profile → Follow/Copy → Backtest** decision loop.

## Run

```bash
npm install
npm run dev
```

## Demo metric definitions (demo-only)

- **ROI**: period return percentage from mock equity series.
- **MDD**: max peak-to-trough drawdown from mock equity curve.
- **Profit Factor**: gross profit / gross loss from mocked trades.
- **Win Rate**: percentage of winning trades in selected window.
- **Avg Hold Time**: average open-to-close duration (hours).
- **Long Bias**: share of long-position exposure over total exposure.

> All values are simulated and persisted locally via `localStorage`.

## Local storage keys

- `demo_followed`: whether user is following the trader.
- `demo_copy_config`: saved copy-trading setup payload.
- `demo_copy_enabled`: copy-trading enabled status badge.
- `demo_backtest_history`: latest backtest params/result snapshot.
