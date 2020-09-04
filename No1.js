
function allEqual(arr) {
    return new Set(arr).size == 1;
  }
  
console.log(allEqual([1,2,3,4,5,6]))
console.log(allEqual([12,12,12,12,12,12]))