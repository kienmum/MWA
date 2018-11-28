/***Lecture 01***/
//**Exercie 1***//
//Use ES6 features, not allowed to use for-loop
String.prototype.filterWords = function(args){
  let temp = this;
  if(args.length) {
    args.map((s) => temp = temp.replace(s,'***'));
  }
  return temp;
}

console.log("This house is nice!".filterWords(['house', 'nice']));

//Promises
//https://playcode.io
String.prototype.filterWords2 = function(args){
  var temp = this;
  var fetchData = function () {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  };

  for (let i = 0; i < args.length; i++) {
    fetchData(args[i]).then(function () {
      temp = temp.replace(args[i],'***');
      console.log(temp);
    });
  }
  
  return temp;
}

//Async/Await
String.prototype.filterWords3 = function(args){
    var temp = this;
    var banWord = async function (s) {
      let promise = new Promise(function (resolve, reject) {
        resolve();
      });
      try {
        let result = await Promise.resolve(1).then(s => temp = temp.toString().replace(s,'***'));
        //console.log(result);
        return result;
      } catch (error) {
          console.log(error);
      }
      
    };
    
    return temp;
  }