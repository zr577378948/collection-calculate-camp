function collect_same_elements(collection_a, object_b) {

  var resultArray = [];

  for (var j in collection_a) {
    for (var i in object_b.value) {
      if (object_b.value[i] === collection_a[j].key) {
        resultArray.push(collection_a[j].key)
      }
    }
  }

  return resultArray;
}

module.exports = collect_same_elements;
