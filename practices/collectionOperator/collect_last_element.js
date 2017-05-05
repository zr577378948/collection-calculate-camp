'use strict';

function collect_last_element(collection) {

  var result=[];

  for (var i in collection) {
    if (i == collection.length - 1) {
      result.push(collection[i])
    }

  }

  return result[0];
}

module.exports = collect_last_element;
