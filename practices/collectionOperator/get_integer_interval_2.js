'use strict';

module.exports = get_integer_interval_2;


function get_integer_interval_2(number_a, number_b) {
  var result = [];

  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      if (i % 2 == 0) {
        result.push(i);
      }
    }
    return result;
  }

  if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      if (i % 2 == 0) {
        result.push(i);
      }
    }
    return result;
  }

  if (number_a == number_b && number_a % 2 == 0) {
    result.push(number_a);
    return result;
  }

  if (number_a == number_b && number_a % 2 != 0) {
    result.push();

    return result;
  }
}
