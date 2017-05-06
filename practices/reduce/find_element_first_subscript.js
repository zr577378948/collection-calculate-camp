'use strict';

function calculate_elements_sum(collection, element) {

  var result = 0;

  for (var i in collection) {
    if (element === collection[i]) {
      result = parseInt(i);//不明白
      break;
    }
  }

  return result;
}

module.exports = calculate_elements_sum;

