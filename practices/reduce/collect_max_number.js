'use strict';

function collect_max_number(collection) {

  var resultArray = collection.sort(sortNumber);

  return resultArray[collection.length - 1];
}

function sortNumber(a, b) {

  return (a - b);
}

module.exports = collect_max_number;
