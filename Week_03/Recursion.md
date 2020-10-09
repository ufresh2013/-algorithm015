### 爬楼梯
```js
```

### 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
```js
var generateParenthesis = function(n) {
  const arr = []
  const generate = (left, right, n, s) => {
    // recursion terminator: 左括号 == 右括号 == 3
    if (left == n && right == n) {
      arr.push(s)
      return
    }

    // process current level: add a left / add a right
    // 只生成合法的括号： 左括号<n，可以继续添加左括号；右括号<左括号<=3，可以继续添加右括号
    if (left < n) {
      generate(left + 1, right, n, s + '(')
    }
    if (right < left) {
      generate(left, right + 1, n, s + ')')
    }
  }
  generate(0, 0, n, '')
  return arr
};
```

### 翻转二叉树
```js
var invertTree = function(root) {
  const reverse = (node) => {
    if (!node) return 
    const temp = node.left
    node.left = node.right 
    node.right = temp
    reverse(node.left)
    reverse(node.right)
  }
  reverse(root)
  return root
};
```

### 验证二叉搜索树
左子树的节点的值均小于它的根节点的值；右子树的节点的值均小于它的根节点的值。
```js
var isValidBST = function(root) {
  let isValid = true
  const recursion = (node, min, max) => {
    if (!node || !isValid) return
    if (node.val > max || node.val < min || node.val == max || node.val == min) {
      isValid = false
      return
    }
    recursion(node.left, min, node.val)
    recursion(node.right, node.val, max)
  }
  recursion(root, -Infinity, Infinity)
  return isValid
};
```

### 二叉树的最大深度
```js
var maxDepth = function(root) {
  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
```

### 二叉树的最小深度
没懂(只把叶子节点纳入，叶子节点是指没有子节点的节点)
```js
var minDepth = function(root) {
  if (!root) return 0
  if (!root.left && root.right !== null) {
      return 1 + minDepth(root.right)
  }
  if (!root.right && root.left !== null) {
      return 1 + minDepth(root.left)
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}
```


### 二叉树的序列化与反序列化
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return 'X,'
  return root.val + ',' + serialize(root.left) + serialize(root.right)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(',')
  const buildTree = list => {
    const val = list.shift()
    if (val === 'X') {
      return null
    }
    const root = new TreeNode(val)
    root.left = buildTree(list)
    root.right = buildTree(list)
    return root
  }
  return buildTree(list)
};
```


### 二叉树的最近公共祖先
由于二叉树的性质，如果p.val和q.val都比root.val小，那么p、q肯定在root的左子树，此时递归左子树。如果 p.val 和 q.val 都比 root.val 大，则递归右子树。

其他情况，不管是一个大于 root.val 一个小于 root.val，还是一个等于一个小于，还是一个等于一个大于，root 即为所求。
```js
const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
};
```


### 从前序与中序遍历构造二叉树



### 组合
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
```js
var combine = function(n, k) {
  const result = []
  const recursion = (curArr, level, curNum) => {
    if (curArr.length === k) {
      result.push(curArr)
      return
    }
    for (let j = curNum + 1; j < n + 1; j++) {
      recursion(curArr.concat([j]), level + 1, j)
    }
  }
  recursion([], 0, 0)
  return result
};
```

### 全排列

### 全排列 II 