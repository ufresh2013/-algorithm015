回溯算法
### 多数元素
```js

```

### 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

```js
var letterCombinations = (digits) => {
  if (!digits) return []
  const result = []
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  // s表示当前字符串，i表示到达digits的第几个元素
  const func = (s, i) => {
    if (i == digits.length) {
      result.push(s)
      return
    }

    // letterArr表示数字对应的英文数组
    const letterArr = map[digits[i]]
    for (let j = 0; j < letterArr.length; j++) {
      func(s + letterArr[j], i + 1)
    }
  }
  func('', 0)
  return result
}
```



### N皇后
```js
var solveNQueens = function(n) {
  let totalResult = []
  let result = [] // 下标表示行，值表示列 [1,2,undefined, ...]
  
  function cal8queens(row) {
    // n个棋子都放置好了，打印结果
    if (row === n) {
      printQueens(result)
      return false;
    }

    for (let column = 0; column < n; column++) {
      if (isOk(row, column)) { // 如果满足要求
        result[row] = column  // 第row行的棋子放到colum列
        cal8queens(row + 1)   // 考察下一行
      }
    }
  }

  function isOk(row, column) {
    let leftup = column - 1
    let rightup = column + 1

    for (let i = row - 1; i >=0; i--) {
      // 逐行往上考察
      // 正上方，左上对角线，右上对角线
      if (result[i] === column) return false
      if (leftup >= 0 && result[i] === leftup) return false
      if (rightup < n && result[i] === rightup) return false
      leftup--
      rightup++
    }
    return true
  }
  
  function printQueens(result) {
    let arr = []
    for (let i = 0; i < n; i++) {
      let str = ''
      for (let j = 0; j < n; j++) {
          str += result[i] === j ? 'Q' : '.'
      }
      arr.push(str)
    }
    totalResult.push(arr)
  }

  cal8queens(0)
  return totalResult
};
```