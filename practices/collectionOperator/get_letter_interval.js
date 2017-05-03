'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
     var q =  String.fromCharCode(parseInt(i)+96);
      result.push(q);

    }
    return result;
  }
  if(number_a>number_b){
    for(var i=number_a;i>=number_b;i--){
      var q =  String.fromCharCode(parseInt(i)+96);
      result.push(q);

    }
    return result;
  }
  if(number_a=number_b){
      var q =  String.fromCharCode(parseInt(number_a)+96);
      result.push(q);

    return result;
  }


}

module.exports = get_integer_interval;

