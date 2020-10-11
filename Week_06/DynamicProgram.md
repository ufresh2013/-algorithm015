### 动态规划
#### 爬楼梯
```js
 var climbStairs = function(n) {
  const dp = []
  // 爬n层楼梯的方法数量是dp[n] = dp[n-1] + dp[n-2]
  // 爬n-1层楼梯的方法数量，因为再爬1层就能到n层
  // 爬n-2层楼梯的方法数量，因为再爬2层就能到n层
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};
```

#### 62. 不同路径
一个机器人位于一个 m x n 网格的左上角，机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。问总共有多少条不同的路径？

令`dp[i][j]`是达到i,j的最多路径。动态方程`dp[i][j] = dp[i-1][j] + dp[i][j-1]`
```js
// 二维数组
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill([])
  for (let i = 0; i < n; i++) dp[0][i] = 1
  for (let i = 0; i < m; i++) dp[i][0] = 1
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1] 
      }
  }
  return dp[m-1][n-1]
};

// 只需要一个数组，一层一层往下算
var uniquePaths = function(m, n) {
  const cur = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] = cur[j] + cur[j-1]
    }
  }
  return cur[n-1]
};
```


### 63. 不同路径 II
一个机器人位于一个 m x n 网格的左上角，机器人每次只能向下或者向右移动一步。现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
```js
var uniquePathsWithObstacles = function(dp) {
    const m = dp.length
    const n = dp.length ? dp[0].length : 1
    dp[0][0] = dp[0][0] === 1 ? 0 : 1
    for (let i = 1; i < n; i++) dp[0][i] = (dp[0][i] === 1 || dp[0][i-1] === 0) ? 0 : 1
    for (let i = 1; i < m; i++) dp[i][0] = (dp[i][0] === 1 || dp[i-1][0] === 0) ? 0 : 1
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j-1]
      }
    }
    return dp[m-1][n-1]
  };
```


#### 980. 不同路径 III
```js

```

#### 1143. 最长公共子序列
给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
输入：text1 = "abcde", text2 = "ace" 
输出：3  
```js

```


#### 三角形最小路径和
#### 三角形最小路径和高票回答： https://leetcode.com/problems/triangle/discuss/38735/Python-easy-to-understand-solutions-(top-down-bottom-up)
#### 最大子序和
#### 乘积最大子数组

#### 198. 打家劫舍
a[i][0, 1]: 0...i 能偷到的max value
0: 表示不偷， 1: 表示偷
a[i][0] = max(a[i-1][0], a[i-1][1])
a[i][1] = a[i-1][0] + nums[i]
```js
var rob = function(nums) {
  if (nums.length === 0) return 0
  const n = nums.length;
  const dp = [[0, nums[0]]]
  for (let i = 1; i < n; i++) {
    dp.push([])
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
    dp[i][1] = dp[i-1][0] + nums[i]
  }
  return Math.max(dp[n-1][0], dp[n-1][1])
};
```


#### 231. 打家劫舍 II
```js
var rob = (nums) => {
  if (nums.length === 0) return 0
  const n = nums.length
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
  }
  return dp[n-1]
}
```

#### 买卖股票的最佳时机
#### 买卖股票的最佳时机 II
#### 买卖股票的最佳时机 III 
#### 最佳买卖股票时机含冷冻期
#### 买卖股票的最佳时机 IV
#### 买卖股票的最佳时机含手续费

#### 完全平方数
#### 编辑距离
#### 跳跃游戏
#### 跳跃游戏 II

#### 零钱兑换
#### 零钱兑换 II