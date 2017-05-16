function collect_same_elements(collection_a, object_b) {

  var result = [];

  for (var i in collection_a) {
    for (var j in object_b.value) {
      if (collection_a[i] === object_b.value[j]) {
        result.push(object_b.value[j]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
