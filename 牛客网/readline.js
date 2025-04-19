// 多行和单行输入
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  const n = parseInt(await readline());
  const lines = [];
  while ((line = await readline())) {
    lines.push(line);
  }
  lines.sort();
  lines.forEach((v) => {
    console.log(v);
  });
})();
