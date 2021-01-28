### 704. 二分查找
二分查找的前提：
① 目标函数单调性（单调递增或者递减）
② 存在上下界
③ 能够通过索引访问
```js
var binarySearch = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = right + left >> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
};
```


### x 的平方根
```js
var mySqrt = function(x) {
  let r = x;
  while (r * r > x) r = Math.floor((r + x / r) / 2);
  return r;
};
```


### 有效的完全平方数
```js
var isPerfectSquare = function(x) {
  let r = x;
  while(r * r > x) {
    r = Math.floor((r + x /r) / 2)
  }
  return r * r === x
};
```


### 33. 搜索旋转排序数组
待定： 还没明白
```js
var search = function(nums, target) {
  let l = 0; r = nums.length - 1;
  while (l <= r) {
    let mid = l + r >> 1
    if (nums[mid] === target) return mid
    if (nums[l] <= nums[mid]) {
      if (target >=nums[l] && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
};
```

### 搜索二维矩阵
### 寻找旋转排序数组中的最小值
### 使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方