# 贪心算法
你需要证明贪心可以求得最优解

### 322. coin change

### 柠檬水找零
时间复杂度O(n)， 空间复杂度O(1)
```js
const lemonadeChange = (bills) => {
  let fiveCount = 0
  let tenCount = 0
  for (let i = 0; i < bills.length; i++) {
    const v = bills[i]
    if (v === 5) {
      fiveCount++
    } else if(v === 10) {
      if (fiveCount === 0) return false
      fiveCount--
      tenCount++
    } else if (v === 20) {
      if (tenCount > 0 && fiveCount > 0) {
        tenCount--
        fiveCount--
      } else if (fiveCount > 2){
        fiveCount = fiveCount - 3
      } else {
        return false
      }
    }
  }
  return true
};
```

### 买卖股票的最佳时机
遍历一遍数组，记录历史最低点，然后叜每一天考虑，如果我是在历史最低点买进的，那我今天卖出能赚多少钱？当考虑完所有天数后，就有最好的答案了。
```js
var maxProfit = function(nums) {
  if (nums.length < 2) return 0
  let min = nums[0]
  let max = 0
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i])
    max = Math.max(max, nums[i] - min)
  }
  return max
};
```

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

### 分发饼干
优先满足饼干需求少的小朋友
```js
const findContentChildren = (g, s) => {
  g = g.sort((a,b) => a - b)
  s = s.sort((a,b) => a - b)
  let count = 0
  while(g.length > 0 && s.length > 0) {
    if (!(g[0] > s.shift())) {
      count++
      g.shift()
    }
  }
  return count
};
```


### 模拟行走机器人
```js

```


### 跳跃游戏 
怎么判断它是否可以到达？只要存在一个位置x，它本身可以到达，并且它跳跃的最大长度nums[x] + x >= y。则位置y也可以到达。换句话说，一个可以到达的位置x，它使得x+1, x+2, x+nums[x]这些连续位置都可以到达。所以我们只要维护最远可以到达的位置，如果重点在这个范围内，就可以到达。
```js
const canJump = nums => {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > k) return false
    k = Math.max(i + nums[i], k)
  }
  return true
};
```


### 跳跃游戏 II 
```js
var jump = function(nums) {
  let step = 0; // 跳跃次数
  let start = 0; // 下一次起跳点范围开始的格子
  let end = 1; // 下一次起跳点范围结束的各自
  while (end < nums.length - 1) {
    let maxPos = 0
    for (let i = start; i < end; i++) {
      maxPos = Math.max(maxPos, i + nums[i]) // 当前步能跳到的最远距离
    }
    start = end
    end = maxPos + 1
    step++
  }
  return step
};
```