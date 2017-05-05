'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var data = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  if (number_b >= number_a)return inc(number_a, number_b, result, data);
  if (number_b < number_a)return des(number_a, number_b, result, data);
}

function inc(number_a, number_b, result, data) {
  for (; number_a <= number_b; number_a++) {
    if (number_a % 26 === 0) {
      result.push(data[parseInt(number_a / 26 - 1)] + data[26]);
    } else {
      result.push(data[parseInt(number_a / 26)] + data[number_a % 26]);
    }
  }
  return result;

}


function des(number_a, number_b, result, data) {
  for (; number_a >= number_b; number_a--) {
    if (number_a % 26 === 0) {
      result.push(data[parseInt(number_a / 26 - 1)] + data[26])
    } else {
      result.push(data[parseInt(number_a / 26)] + data[number_a % 26]);
    }

  }
  return result;
}


module.exports = get_letter_interval_2;

