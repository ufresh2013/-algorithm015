分治算法（divide and conquer），分而治之 ，也就是将原问题划分成 n 个规模较小，并且结构与原问题相似的子问题，递归地解决这些子问题，然后再合并其结果，就得到原问题的解。

### Pow(x, n)
计算x的n次幂函数
```js
const myPow = (x, n) => {
  if (n === 0) return 1
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n % 2) { // n是奇数,x的n次方 = x*x的n-1次方
    return x * myPow(x, n - 1)
  }
  return myPow(x * x, n/2) // n是偶数，使用分治,等于x*x的n/2次方
}
```

### 子集
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
```js
const subsets = (nums) => {
  const result = []
  // list存储中间结果，index表示走到第个元素
  const dfs = (list, index) => {
    if (index == nums.length) {
      result.push(list)
      return 
    }
    dfs(list.concat([]), index + 1) // no pick the number at this index
    list.push(nums[index])
    dfs(list.concat([]), index + 1) // pick the number at this index
  }
  dfs([], 0)
  return result
}
```