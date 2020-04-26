const raw = require('./rawJSON.json');

const body = raw.program.body

const TransferRaw = function (body) {
  let result ={};
  
  body.map(item => {
    let suites = [];
    let res = {};
    let title = item.expression.arguments[0] || '';
    let fnBody = item.expression.arguments[1];
    let desObj = item.expression.arguments[2];

    title = title.value;
    res['title'] = title;

    if(desObj) {
      desObj.properties.map(item => {
        res[item.key.name] = item.value.value;
      })
    }
    
    suites.push(res);

    result['suites'] = suites;
    
  })



  return result;
  
  
  
  
  // const fnBody2 = fnBody.body.body;

  // const suites2 = fnBody2.map(item => {
  //   let suites = [];
  //   let res = {};
  //   let title = item.expression.arguments[0];
  //   let fnBody = item.expression.arguments[1];
  //   let desObj = item.expression.arguments[2];

  //   title = title.value;
  //   res['title'] = title;

  //   if(desObj) {
  //     desObj.properties.map(item => {
  //       res[item.key.name] = item.value.value;
  //     })
  //   }
    
  //   suites.push(res);
    
  //   return suites;
  // })
  
  // res['suites'] = suites2;

  // suites.push(res);

  // return suites;
  
}

console.log(JSON.stringify(TransferRaw(body), null, 2));