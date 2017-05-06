'use strict';

function double_to_one(collection) {

  var result = [];

  for (var i in collection) {
    for (var j in collection[i]) {
      result.push(collection[i][j]);

    }
    for (var i = 0; i < result.length - 1; i++) {

      for (var j = i + 1; j < result.length; j++) {

        if (result[i] === result[j]) {

          result.splice(j, 1);
        }
      }
    }
  }
  return result;
}

module.exports = double_to_one;
