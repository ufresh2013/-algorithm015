### 递归
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

### 分治
```js
const divide_conquer = (problem, params) => {
  if (problem == null) {
    process_result
    return
  }

  // process current problem
  subproblem = split_problem(problem, data)
  sub_result1 = divide_conquer(subproblem[0], p1)
}
```

### DFS 深度优先搜索
```js
// 递归写法
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}

// 非递归写法
const dfs = (node) => {
  if (!node) return
  const visited = []
  const stack = node
  while (stack.length > 0) {
    const node = stack.pop()
    visited.push(node)
    process(node)

    const nodes = generate_related_nodes(node)
    stack.push(nodes)
  } 
}
```


### BFS 广度优先搜索
```js
const bfs = (root) => {
  const result = []
  const queue = [root]
  while (queue.length > 0) {
    const level = []
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.pop()
      level.push(node.val)
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
}
```

# 启发式搜索 A* search
启发式函数：h(n), 用来评价哪些节点最有希望会是我们要找的节点。
```js
function AstartSearch (graph, start, end) {
  const pq = collection.priority_queue() // 按优先级排序 -> 估价函数
  pq.append([start])
  visited.add(start)

  while (pq.length > 0) {
    node = pq.pop() // can we add more intelligence here?
    visited.add(node)

    process(node)
    nodes = generate_related_nodes(node)
    unvisited = [node in nodes if node not in visited]
    pq.push(unvisited)
  }
}
```
