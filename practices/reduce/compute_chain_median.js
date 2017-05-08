'use strict';

function compute_chain_median(collection) {

  collection = collection.split("->").sort(function (a, b) {
    return a - b
  });


    return (parseInt(collection[collection.length / 2]) +
      parseInt(collection[collection.length / 2 - 1])) / 2;

}

module.exports = compute_chain_median;
