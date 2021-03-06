### 最小的k个数
输入整数数组 arr ，找出其中最小的 k 个数。

- 先排序，后截取前k个数
时间复杂度O(nlogn)，空间复杂度O(longn)
```js
var getLeastNumbers = function(arr, k) {
  return arr.sort((a,b) => a - b).splice(0, k)
};
```


- 建立最小堆
```js
const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

class Heap {
  constructor (arr) {
    this.arr = [] // 从下标1开始存储数据
    this.count = 0 // 堆已经存储的数据个数
    arr.forEach(v => this.insert(v))
  }

  insert (data) {
    this.count++
    this.arr[this.count] = data
    let i = this.count
    // 把节点放在最后，对比当前节点与父节点的关系，如果不满足，则互换节点
    while (i/2|0 > 0 && this.arr[i] < this.arr[i/2|0]) {
      swap(this.arr, i, (i / 2 | 0))
      i = i / 2 | 0
    }
  }
  
  removeMin () {
    const heapify = (arr, n, i) => {
      while (true) { // 自上往下堆化
        let maxPos = i
        if (i*2 <= n && arr[i] > arr[i*2]) maxPos = i*2
        if (i*2+1 <= n && arr[maxPos] > arr[i*2+1]) maxPos = i*2+1
        if (maxPos == i) break
        swap(arr, i, maxPos)
        i = maxPos
      }
    }

    if (this.count === 0) return -1 // 堆中没有数据
    const min = this.arr[1]
    this.arr[1] = this.arr[this.count]
    this.count--
    heapify(this.arr, this.count, 1)
    return min
  }

  printHeap () {
    console.log(this.arr)
  }
}

var getLeastNumbers = function(arr, k) {
  const heap = new Heap(arr)
  const result = []
  while (k > 0) {
    result.push(heap.removeMin())
    k--
  }
  return result
}
```