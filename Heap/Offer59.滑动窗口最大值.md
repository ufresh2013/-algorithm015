### 滑动窗口最大值
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
- 暴力法： 遍历所有窗口区间，获取最大值，时间复杂度O(nk)
```js
const maxSlidingWindow = (nums, k) => {
  if (k < 2) return nums 
  const result = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    let max = nums[i]
    for (let j = i + 1; j < i + k; j++) {
      max = Math.max(max, nums[j])
    }
    result.push(max)
  }
  return result
};
```

- 单调栈
```js
const maxSlidingWindow = (nums, k) => {
  const res = []
}
```