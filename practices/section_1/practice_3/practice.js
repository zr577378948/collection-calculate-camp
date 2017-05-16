function collect_same_elements(collection_a, object_b) {

  var result = [];
  for (var i in collection_a) {
    for (var j in object_b.value) {
      result.push(object_b.value[j]);

    }
  }
  return result;
}

module.exports = collect_same_elements;
