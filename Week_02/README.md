学习笔记
### 二叉树代码模板
- 二叉树每个节点的定义代码
```js
function TreeNode(val) {
 this.val = val;
 this.left = null;
 this.right = null;
}
```

- 前中后序遍历代码
```python
def preorder(self, root):
  if root: 
    self.path.append(root.val)
    self.preorder(root.left)
    self.preorder(root.right)

def inorder(self, root): 
  if root:
    self inorder(root.left)
    self.path.append(root.val)
    self.inorder(root.right)

def postorder(self, root):
  if root:
    self.postorder(root.left)
    self.postorder(root.right)
    self.path.append(root.val)
```