学习笔记
### 1. 递归代码模板
```js
const recursion = (level, params) {
  // recursion terminator
  if (level > MAX_LEVEL) {
    process_result
    return
  }

  // process current level
  process(level, params)
  // drill down
  recursion(level + 1, parms)
  // clean current level status if need
}
```