### x 的平方根
```js
var mySqrt = function(x) {
  let r = x;
  while (r * r > x) r = Math.floor((r + x / r) / 2);
  return r;
};
```