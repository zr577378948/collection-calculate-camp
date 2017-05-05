'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  var result=[];

  for(var i in collection_a){
    for(var j in collection_b){
      result.push(collection_b[i])
      if(collection_b[j]===collection_a[i]){
          break;
      }
    }
  }

  return result;
}

module.exports = choose_no_common_elements;
