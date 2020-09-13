### 412. Fizz Buzz
写一个程序，输出从 1 到 n 数字的字符串表示。
1. 如果 n 是3的倍数，输出“Fizz”；
2. 如果 n 是5的倍数，输出“Buzz”；
3. 如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

```js
var fizzBuzz = function(n) {
  let arr = []
  for (let i = 1; i < n + 1; i++) {
    arr.push(i.toString())
  }
  for (let i = 2; i < n; i = i + 3) {
    arr[i] = 'Fizz'
  }
  for (let i = 4; i < n; i = i + 5) {
    arr[i] = 'Buzz'
  }
  for (let i = 14; i < n; i = i + 15) {
    arr[i] = 'FizzBuzz'
  }
  return arr
};
```

### 657. 机器人能否返回原点

### 面试题 01.01. 判定字符是否唯一
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

