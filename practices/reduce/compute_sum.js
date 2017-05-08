'use strict';

function calculate_elements_sum(collection) {
  var result = 0;

  for (var i in collection) {
    result += collection[i];
  }

  return result;
}

module.exports = calculate_elements_sum;

