// Extend Array.prototype and create your map, filter and reduce functions

Array.prototype.myMap = function(callback){
  var self = this
  let resultArray = []
  // Custom Logic

  return resultArray
}

let naturalNumberArray = [1,2,3,4,5,6,7,8,9,10]
let squareFunction = x => x*x
console.log(naturalNumberArray.map(squareFunction))
console.log(naturalNumberArray.myMap(squareFunction))


Array.prototype.myFilter = function(callback){
  var self = this
  let resultArray = []
  // Custom Logic

  return resultArray
}

let evenFunction = x => x % 2 === 0
console.log(naturalNumberArray.filter(evenFunction))
console.log(naturalNumberArray.myFilter(evenFunction))
