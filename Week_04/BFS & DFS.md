### 二叉树的层序遍历
```js
var levelOrder = function(root) {
  const arr = []
  const func = (node, level) => {
    if (!node) return
    
    if (!arr[level]) arr[level] = []
    arr[level].push(node.val)

    func(node.left, level + 1)
    func(node.right, level + 1)
  } 
  func(root, 0)
  return arr
};
```

### 最小基因变化

### 括号生成

### 在每个树行中找最大值

### 单词接龙

### 单词接龙 II

### 岛屿数量

### 扫雷游戏