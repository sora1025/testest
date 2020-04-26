const raw = require('./rawJSON.json');

const arguments = raw.program.body[0].expression.arguments;


const TransferRaw = function (arguments) {
  const suites = [];
  const res = {};
  let title = arguments[0] || '';
  let fnBody = arguments[1] || undefined;
  let desObj = arguments[2] || undefined;

  title = title.value;
  res['title'] = title;

  if(desObj) {
    desObj.properties.map(item => {
      res[item.key.name] = item.value.value
    })
  }
  
  const fnBody2 = fnBody.body.body;

  const suites2 = fnBody2.map(item => {
    let suites = [];
    let res = {};
    let title = item.expression.arguments[0];
    let fnBody = item.expression.arguments[1];
    let desObj = item.expression.arguments[2];

    title = title.value;
    res['title'] = title;

    if(desObj) {
      desObj.properties.map(item => {
        res[item.key.name] = item.value.value;
      })
    }
    res['suites'] = suites3;
    
    suites.push(res);
    
    return suites;
  })
  
  res['suites'] = suites2;

  suites.push(res);

  return suites;
  
}

TransferRaw(arguments)
// console.log(JSON.stringify(TransferRaw(arguments), null, 2));