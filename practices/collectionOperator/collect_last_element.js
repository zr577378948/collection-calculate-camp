'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var result = [];
  /*for(var i=0;i<collection.length;i++){
    if(i==collection.length-1){
      result.push(collection[i]);
    }

  }*/
  var i;
  for (i in collection)
  {
    if(i==collection.length-1){
      result.push(collection[i])
    }

  }

  return result[0];
}

module.exports = collect_last_element;
