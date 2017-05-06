'use strict';

function compute_chain_median(collection) {
  var result = 0;

  collection = collection.split("->").sort(function (a, b) {
    return a - b
  });

  for (var i in collection) {
    result = (parseInt(collection[collection.length / 2]) +
      parseInt(collection[collection.length / 2 - 1])) / 2;
  }

  return result;
}

module.exports = compute_chain_median;
