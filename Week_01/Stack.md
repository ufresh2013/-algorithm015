### 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
px: 如果一个东西有最近相关性，那么它可以用栈来解决。如果是左括号就把它压入栈内，如果是右括号，就将它和栈顶元素匹配，如果匹配得上，就是正负抵消，把栈顶元素移出栈。

```js
var isValid = function(s) {
  const map = {'{': '}', '[': ']', '(': ')'}
  const leftArr = [] // 保存左括号的栈

  for (let i in s) {
    const t = s[i]
    if (map[t]) {
      leftArr.push(t)
    } else if (t !== map[leftArr.pop()]) {
      return false
    }
  }
  return !leftArr.length
}
```



### 最小栈
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
ps: 在常熟时间内检索到最小元素——使用辅助栈记录每个元素在进栈后，当时的最小元素是多少。

```js
var MinStack = function() {
  this.stack = [];
  this.minStack = [Infinity];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
};

MinStack.prototype.pop = function() {
  this.minStack.pop()
  this.stack.pop()
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};
```



### 柱状图中最大的矩形
维护一个栈，这个栈里面的元素是从小到大进行排列的。因为这样可以有效地知道它的左边界在什么地方
```js
const largestRectangleArea = function(heights) {
  let maxArea = 0
  const stack = []
  heights = [0, ...heights] // 左右添加一个0
  
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) { // 栈的元素要被推出，此时要计算面积
      const stackTopIndex = stack.pop()
      maxArea = Math.max(maxArea, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }
  return maxArea
}
```




### 滑动窗口最大值
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。（在线性时间复杂度内解决此题）
px: 右移时，新元素进来，新元素要撞击队列里面的其他之前所有的元素。只要比新元素小的元素都可以从栈里面出来。
```js
const maxSlidingWindow = function(nums, k) {
  
}
```



### 用 add first 或 add last 这套新的 API 改写 Deque 的代码
### 分析 Queue 和 Priority Queue 的源码



### 设计循环双端队列
```js

```



### 接雨水
```js
var trap = function(height) {
  let capacity = 0
  let leftArr = []
  let rightArr = []
  let left = 0
  let right = 0
  for (let i = 1; i < height.length - 1; i++) {
    left = height[i - 1] > left ? height[i - 1] : left
    leftArr.push(left)

    right = height[height.length - i] > right ? height[height.length - i] : right
    rightArr.unshift(right) 
  }
  height.pop()
  height.shift()

  for (let k = 0; k < height.length; k++) {
    const l = leftArr[k]
    const r = rightArr[k]
    const c = height[k]
    if (l > c && r > c) {
      capacity = capacity + Math.min(l, r) - c
    }
  }
  return capacity
};
```