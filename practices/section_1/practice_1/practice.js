function collect_same_elements(collection_a, collection_b) {

  var result=[];

  for(var i in collection_a){
    for(var j in collection_b){
      if(collection_a[i]===collection_b[j]){
        result.push(collection_b[j]);
      }
    }

  }
  return result;
}

module.exports = collect_same_elements;
