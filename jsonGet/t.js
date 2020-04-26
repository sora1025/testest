let obj = {
  title:"123",
  author:"小宁同学"
}

function res(obj) {
  let temp = {};
  let suites = []
  temp.title = '112',
  temp.author = '小焦同学',
  suites.push(temp)
  obj['suites'] = suites;
  res
  return obj;
}

console.log(res(obj))