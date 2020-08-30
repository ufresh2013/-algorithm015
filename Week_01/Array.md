### 两数之和
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
```js
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++ ) {
    for(let j = i + 1; j < nums.length; j++ ) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};
```


### 盛最多水的容器
```js
var maxArea = function(height) {
  let i = 0; // 左指针
  let j = height.length - 1; // 右指针
  let area = 0;
  while(i < j) {
    area = Math.max(Math.min(height[i], height[j]) * (j - i), area)
    if (height[i] < height[j]) {
        i++
    } else {
        j--
    }
  }
  return area
};
```


### 移动零
```js
var moveZeroes = function(nums) {
  let slowP = 0; // 慢指针，i表示快指针
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (i !== slowP) {
        nums[slowP] = nums[i]
        nums[i] = 0
      }
      slowP++
    }
  }
  return nums
};
```


### 爬楼梯
```js
let f0 = 0 // 爬n-2层楼梯的方法数量
let f1 = 1 // 爬n-1层楼梯的方法数量
let f2 = 2 // 爬n层楼梯的方法数量
for (let i = 3; i <= n; i++) {
    f0 = f1
    f1 = f2
    f2 = f0 + f1
}
return n === 1 ? f1 : f2
```


### 三数之和
```js
var threeSum = function(nums) {
  let arr = []
  nums = nums.sort(function(a, b){
    return a - b
  })

  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] == nums[k - 1]) continue; // 跳过重复的k值
    let i = k + 1
    let j = nums.length - 1

    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j]
      if (sum === 0) {
        arr.push([nums[k], nums[i], nums[j]])
        while(i < j && nums[i] === nums[++i]) {}
        while(i < j && nums[j] === nums[--j]) {}
      } else if (sum < 0) {
        while(i < j && nums[i] === nums[++i]) {}
      } else {
        while(i < j && nums[j] === nums[--j]) {}
      }
    }
  }

  return arr
};
```

### 删除排序数组中的重复项
```js
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length
  let j = 0; // j前的元素都没有重复
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i]
    }
  }
  return ++j
};
```

### 旋转数组
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
```js
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
  return nums
};
```


### 合并另个有序数组
```js
var merge = function(nums1, m, nums2, n) {
  m--
  n--
  while (n > -1) {
    if (nums1[m] > nums2[n]) {
      nums1[m + n + 1] = nums1[m]
      m--
    } else {
      nums1[m + n + 1] = nums2[n]
      n--
    }
  }
  return nums1
};
```


### 加一
```js
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10
    if (digits[i] != 0) {
      return digits
    }
  }
  return [1, ...digits]
}
```