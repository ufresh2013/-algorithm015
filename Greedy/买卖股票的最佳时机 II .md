### 买卖股票的最佳时机 II 
遍历真个股票交易日价格列表，所有上涨交易日都买卖（赚到所有利润），所有下降交易日都不买卖（永不亏钱）。
```js
var maxProfit = function(prices) {
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      max += prices[i] - prices[i - 1]
    }
  }
  return max
};
```