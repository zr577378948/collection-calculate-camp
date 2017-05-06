'use strict';

function compare_collections(collection_a, collection_b) {

  for (var i in collection_a) {
    for (var j in collection_b) {
      if (collection_a[i] === collection_b[j]) {

        return true;
      } else {

        return false;
      }
    }
  }


}
module.exports = compare_collections;


