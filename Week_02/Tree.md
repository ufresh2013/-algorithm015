### 二叉树的前序遍历
```js
var preOrderTraversal = function(root) {
  const path = []
  const func = function(node) {
    if (!node) return
    path.push(node.val)
    func(node.left)
    func(node.right)
  }
  func(root)
  return path
};
```


### 二叉树的中序遍历
```js
var inorderTraversal = function(root) {
  const path = []
  const func = (node) => {
    if (!node) return
    func(node.left)
    path.push(node.val)
    func(node.right)
  }
  func(root)
  return path
};
```


### 二叉树的后续遍历
```js
var postorderTraversal = function(root) {
  const path = []
  const func = (node) => {
    if (!node) return
    func(node.left)
    func(node.right)
    path.push(node.val)
  }
  func(root)
  return path
};
```

### N叉树的前序遍历
```js
var preorder = function(root) {
  const path = []
  const func = function(node) {
    if (!node) return
    path.push(node.val)
    node.children.forEach((item) => {
      func(item)
    })
  }
  func(root)
  return path
};
```

### N叉树的后续遍历
```js
var postorder = function(root) {
  const path = []
  const func = function(node) {
    if (!node) return
    node.children.forEach((item) => {
      func(item)
    })
    path.push(node.val)
  }
  func(root)
  return path
};
```


### N叉树的层序遍历
```js
var levelOrder = function(root) {
  const arr = []
  const func = (node, level) => {
    if (!node) return

    if (!arr[level]) arr[level] = []
    arr[level].push(node.val)

    node.children.forEach((item) => {
      func(item, level + 1)
    })
  } 
  func(root, 0)
  return arr
};
```