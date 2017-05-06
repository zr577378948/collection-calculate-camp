'use strict';
function choose_no_common_elements(collection_a, collection_b) {

var result=[];
  for(var j in collection_a){
    if(isExist(collection_a[j],collection_b)){

    result.push(collection_a[j]);

    }
  }

  return result;
}


function isExist(ElementA,collection_b) {
  var a = 0;
  for (var i in collection_b) {
    if (ElementA === collection_b[i]) {
      a++;
    }
  }

  if (a === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = choose_no_common_elements;
