'use strict';

function calculate_elements_sum(collection, element) {

  var result = [];

  for (var i in collection) {
    if (element === collection[i]) {
      result = parseInt(i);
    }
  }

  return result;
}
module.exports = calculate_elements_sum;
