function collect_same_elements(collection_a, collection_b) {
  var resultArray = [];

  for(var i in collection_a){
    for (var m in collection_b){
    for (var n in collection_b[m]){
      if(collection_a[i]===collection_b[m][n]){
        resultArray.push(collection_a[i]);
      }

      }
    }
  }
  return resultArray;
}

module.exports = collect_same_elements;
