### 滑动窗口最大值
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。（在线性时间复杂度内解决此题）
px: 右移时，新元素进来，新元素要撞击队列里面的其他之前所有的元素。只要比新元素小的元素都可以从栈里面出来。
```js
var maxSlidingWindow = function(nums, k) {
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