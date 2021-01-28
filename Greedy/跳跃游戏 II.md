### 跳跃游戏 II 
```js
var jump = function(nums) {
  let step = 0; // 跳跃次数
  let start = 0; // 下一次起跳点范围开始的格子
  let end = 1; // 下一次起跳点范围结束的各自
  while (end < nums.length - 1) {
    let maxPos = 0
    for (let i = start; i < end; i++) {
      maxPos = Math.max(maxPos, i + nums[i]) // 当前步能跳到的最远距离
    }
    start = end
    end = maxPos + 1
    step++
  }
  return step
};
```