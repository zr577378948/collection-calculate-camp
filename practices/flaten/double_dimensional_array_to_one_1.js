'use strict';

function double_to_one(collection) {
  /*var result=[];

   for(var i in collection){
   for(var j in collection[i]){
   result.push(collection[i][j]);
   }
   }
   return result;*/

  //return [].concat.apply([],collection);
  return eval('[' + collection + ']');
}
module.exports = double_to_one;
