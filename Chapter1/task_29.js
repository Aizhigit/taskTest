function minMax(item){
  item.sort(function(a, b){return a - b});
  console.log(`${item[1]} ${item[item.length-2]}`);    
  }
  minMax([1, 2, 3, 4, 5]);
