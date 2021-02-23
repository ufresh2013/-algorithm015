### 剑指 Offer 53 - I. 在排序数组中查找数字 I
统计一个数字在排序数组中出现的次数。

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

```js
const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length
  while (left <= right) {
    const mid = right + left >> 1
    // lower为true时，找最左一个位置，nums[mid] === target时，让right往下减，最后找到最左侧的索引
    // lower为false时，找最后一个位置, nums[mid] === target, 让left往上加，最后找到大于target的索引
    if (nums[mid] > target || (lower && nums[mid] >= target))  {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}

const search = (nums, target) => {
  let ans = 0
  const leftIdx = binarySearch(nums, target, true)
  const rightIdx = binarySearch(nums, target, false) - 1
  if (nums[leftIdx] === target && nums[rightIdx] === target && leftIdx >= 0 && rightIdx < nums.length) {
    ans = rightIdx - leftIdx + 1
  }
  return ans
}
```