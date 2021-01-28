### 最小的k个数
输入整数数组 arr ，找出其中最小的 k 个数。
- 先排序，后截取前k个数
时间复杂度O(nlogn)，空间复杂度O(longn)
```js
var getLeastNumbers = function(arr, k) {
  return arr.sort((a,b) => a - b).splice(0, k)
};
```