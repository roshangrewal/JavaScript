// Extend Array.prototype and create your map, filter and reduce functions

Array.prototype.myMap = function(callback){
  var self = this
  let resultArray = []
  // Custom Logic

  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
    // console.log(i);
  }
  return resultArray;
}

let naturalNumberArray = [1,2,3,4,5,6,7,8,9,10]

// const myMapArray = naturalNumberArray.myMap(x => x * x);
// console.log(myMapArray);


let squareFunction = x => x*x
console.log(naturalNumberArray.map(squareFunction))
console.log(naturalNumberArray.myMap(squareFunction))

Array.prototype.myFilter = function(callback){
  var self = this
  let resultArray = []
  // Custom Logic

  for(let i = 0; i < this.length; i++) {
    if (callback(this[i])) resultArray.push(this[i]);
  }
  return resultArray;
};

//
let evenFunction = x => x % 3 === 0
console.log(naturalNumberArray.filter(evenFunction))
console.log(naturalNumberArray.myFilter(evenFunction))





for(let current of self){
  resultArray.push(callback(current))
}

