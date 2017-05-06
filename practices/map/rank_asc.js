'use strict';
var rank_asc = function (collection) {
  var result = [];

  for (var i in collection) {
    result = collection.sort(function (a, b) {
      return b - a
    });
  }
  return result;
};

module.exports = rank_asc;
