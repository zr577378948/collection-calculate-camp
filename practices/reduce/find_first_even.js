'use strict';

function find_first_even(collection) {

  var result = 0;

  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      result = collection[i];
      break;
    }
  }

  return result;
}

module.exports = find_first_even;

