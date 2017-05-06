'use strict';

function compute_median(collection) {

  var result=[];
  if(collection.length<6){collection.sort(function(a,b){return a-b;})}
  if(collection.length%2!=0){
  for(var i in collection){
    result=collection[parseInt(collection.length/2)]
  }
  }else if(collection.length>4){
    for(var i in collection){
      result=(collection[parseInt(collection.length/2)]+collection[parseInt(collection.length/2-1)]-2)/2
    }
  }else{
    for(var i in collection){
      result=collection[parseInt(collection.length/2)+parseInt(collection.length/2-1)]/2
    }
  }
  return result;
}

module.exports = compute_median;



