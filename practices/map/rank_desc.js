'use strict';
var rank_desc = function(collection){

  var result=[];

  for(var i in collection){
    result=collection.sort(i);
  }
  return result;
};

module.exports = rank_desc;
