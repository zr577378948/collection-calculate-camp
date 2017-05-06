'use strict';

function calculate_elements_sum(collection, element) {

  var result = [];

  for (var i in collection) {
    if (element === collection[i]) {
      result.push(parseInt(i));//不明白
    }
  }
  return result[result.length - 1];
}

module.exports = calculate_elements_sum;
