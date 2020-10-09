### 有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
- 方法1： 排序，比较s, t排序后是否相等。时间复杂度O(nlogn)
```js
const isAnagram = (s, t) => {
  return s.split('').sort().join('') == t.split('').sort().join('')
};
```

- 方法2： 哈希表，统计每个字母出现的频次
```js
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  const counter = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt() - 97]++
    counter[t[i].charCodeAt() - 97]--
  }
  for (let j = 0; j < 26; j++) {
    if (counter[j] != 0 ) {
      return false
    }
  }
  return true
}
```

### 字母异位词分组
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```js
var groupAnagrams = function(strs) {
  const dict = {}
  strs.forEach(s => {
    const counter = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      counter[s[i].charCodeAt() - 97]++
    }
    const str = counter.join('#')
    if (dict[str]) {
      dict[str].push(s)
    } else {
      dict[str] = [s]
    }
  })
  return Object.values(dict)
};
```


### 两数之和
```
```

