const raw = require('./test.json');

const body = raw.program.body

const TransferRaw = function (body) {
  
  let result ={};
  let suites = [];

  body.map((item,index) => {  
    let res = {};
    let suites = [];
    let title = item.expression.arguments[0] || '';
    let fnBody, desObj;

    //第三个参数存在证明第二个参数（函数体）存在
    if(item.expression.arguments[2]) {
      fnBody = item.expression.arguments[1];
      desObj = item.expression.arguments[2];
    }else {
      desObj = item.expression.arguments[1];
    }

    // console.log(fnBody);

    title = title.value;
    res['title'] = title;

    //遍历标志对象，添加进res
    if(desObj) {
      desObj.properties.map(item => {
        res[item.key.name] = item.value.value;
      })
    }
    suites.push(res);

    if(fnBody) {
      console.log(suites)
      TransferRaw(fnBody.body.body)
    }
    
  })

  result['suites'] = suites

  return result;
  
  
}
// TransferRaw(body)
console.log(JSON.stringify(TransferRaw(body), null, 2));