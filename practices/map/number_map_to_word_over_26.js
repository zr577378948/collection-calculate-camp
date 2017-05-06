'use strict';
var number_map_to_word_over_26 = function (collection) {

  var result = [];
  var word = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (var i in collection) {
    if (parseInt(collection[i] / 26) > 0) {
      result.push(word[1] + word[collection[i] % 26]);
    } else {
      result.push(word[collection[i]]);
    }
  }

  return result;
};

module.exports = number_map_to_word_over_26;
