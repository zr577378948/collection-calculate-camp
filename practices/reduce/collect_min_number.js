'use strict';

function collect_min_number(collection) {

  var result=[];

  for(var i in collection){
    result=collection.sort();
  }
  return result[0];
}

module.exports = collect_min_number;

