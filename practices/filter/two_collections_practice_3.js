'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  var result=[];

  for(var i in collection_a){
    if(isExist(collection_a[i],collection_b)){
      result.push(collection_a[i]);
    }

  }
  return result;
}

function isExist(ElementsA,collection_b){
  var a=0;
  for(var j in collection_b){
    if(ElementsA%collection_b[j]===0){
      a++;
    }
  }

  if(a===0){
    return false;
  }else{
    return true;
  }

}
module.exports = choose_divisible_integer;
