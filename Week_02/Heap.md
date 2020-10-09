### 最小的k个数
输入整数数组 arr ，找出其中最小的 k 个数。
- 先排序，后截取前k个数
时间复杂度O(nlogn)，空间复杂度O(longn)
```js
var getLeastNumbers = function(arr, k) {
  return arr.sort((a,b) => a - b).splice(0, k)
};
```

- 最大堆



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

### HeapSort



### 丑数
丑数的排列
假设当前存在3个数组nums2, nums3, nums5分别代表丑数序列从1开始分别乘以2,3,5的序列，即
```js
nums2 = {1*2, 2*2, 3*2, 4*2, 5*2, 6*2, 8*2...}
nums3 = {1*3, 2*3, 3*3, 4*3, 5*3, 6*3, 8*3...}
nums5 = {1*5, 2*5, 3*5, 4*5, 5*5, 6*5, 8*5...}
// 注意 7 不是丑数. 
// 2, 3, 5 这前 3 个丑数一定要乘以其它的丑数， 所得的结果才是新的丑数， 所以上例中没有出现 7*2, 7*3, 7*5
```
那么，最终的丑数序列实际上就是这3个有序序列对的合并结构，计算丑数序列相当于合并3个有序序列。

合并3个有序序列，最简单的方法就是每一个序列都各自维护一个指针，然后比较指针指向的元素的值，将最小的值放入合并数组中，并将相应指针向后移动一个元素。

注意：nums2, num3, nums5中是存在重复解的，因此这里使用if..if..if..，而不是if..else这种结构来跳过相同结果。
```js
var nthUglyNumber = function(n) {
  let p2 = 0; 
  let p3 = 0; 
  let p5 = 0;
  const dp = [1]
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(Math.min(dp[p2] * 2, dp[p3] * 3), dp[p5] * 5)
    if (dp[i] === dp[p2] * 2) p2++
    if (dp[i] === dp[p3] * 3) p3++
    if (dp[i] === dp[p5] * 5) p5++
  }
  return dp[n - 1]
};
```

### 前K个高频元素
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]

```js

```