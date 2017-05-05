'use strict';

function grouping_count(collection) {
  var result = {};

  for (var i in collection) {
    if (result[collection[i]]) {
      result[collection[i]]++;
    } else {
      result[collection[i]] = 1;
    }
  }

  return result;
}

module.exports = grouping_count;
