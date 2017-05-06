'use strict';

function collect_max_number(collection) {

  var result = [];

  for (var i in collection) {
    result = collection.sort(i);
  }
  return result[collection.length - 1];
}

module.exports = collect_max_number;
