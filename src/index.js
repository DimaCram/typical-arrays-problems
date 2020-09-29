
exports.min = function min (array) {
  if(typeof array == 'undefined' || array.length == 0)
    return 0;
  
  return Math.min(...array);
}

exports.max = function max (array) {
  if(typeof array == 'undefined' || array.length == 0)
    return 0;
  
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if(typeof array == 'undefined' || array.length == 0)
    return 0;
  
  let count = 0;  

  array.forEach(element => {
    count += element;
  });
  return count / array.length;
}
