'use strict';

function find_last_even(collection) {

  var result = [];

  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      result.push(collection[i]);

    }
  }

  return result[result.length - 1];
}

module.exports = find_last_even;
