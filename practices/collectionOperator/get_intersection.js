'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  var i;
  var j;

  for (i in collection_b) {
    for (j in collection_a) {
      if (collection_b[i] == collection_a[j]) {
        result.push(collection_a[j]);
      }
    }
  }

  return result;
}

module.exports = get_intersection;
