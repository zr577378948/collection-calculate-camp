'use strict';

function get_union(collection_a, collection_b) {
  var result = [];

  result = Array.from(new Set(collection_a.concat(collection_b)));

  return result;
}

module.exports = get_union;

