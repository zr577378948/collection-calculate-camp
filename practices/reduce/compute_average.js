'use strict';

function compute_average(collection) {
  var result = 0;

  for (var i in collection) {
    result += collection[i];

  }

  return result / collection.length;
}

module.exports = compute_average;

