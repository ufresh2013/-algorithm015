### 反转链表
反转一个单链表
```js
var reverseList = function(head) {
  let prev = null
  let cur = head

  let tmp = null
  while (cur !== null) {
    tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
  }
  return prev 
};
```


### 两两交换链表中的节点
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表
```js
var swapPairs = function(head) {
  if (head == null || head.next == null) {
    return head
  }
  const firstNode = head
  const secondNode = head.next

  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode

  return secondNode 
};
```


### 环形链表
给定一个链表，判断链表中是否有环。使用O(1)内存解决此问题。
```js
if (!head || !head.next) return false
  let slow = head
  let fast = head.next
  while (slow !== fast) {
      if (!fast || !fast.next) return false
      slow = slow.next
      fast = fast.next.next
  }
  return true
```


### 环形链表 II
```js

```

### K 个一组翻转链表
```js

```