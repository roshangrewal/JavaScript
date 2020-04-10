Array.prototype.top = function(){
  var self = this
  return self[self.length - 1]
}

var bracketMatching = function(input){
  let inputArray = input.split('')

  const bracketRelations = {
    "}": "{",
    ")": "(",
    "]": "["
  }
  const allLeftBrackets = Object.values(bracketRelations)
  const allRightBrackets = Object.keys(bracketRelations)

  let leftBracketStack = []
  for (let current of inputArray) {
    if (allLeftBrackets.includes(current)){
      leftBracketStack.push(current)
    }
    else if (bracketRelations[current] === leftBracketStack.top()){ 
      leftBracketStack.pop()
    }
    else if (allRightBrackets.includes(current)){
      return false
    }
  }
  if (leftBracketStack.length === 0) return true;
  return false
}

console.log(bracketMatching("{}") === true)
console.log(bracketMatching("{(})") === false)
console.log(bracketMatching("{()}") === true)
console.log(bracketMatching("[]{}") === true)
console.log(bracketMatching("[]") === true)
console.log(bracketMatching("{(}") === false)
console.log(bracketMatching("{})") === false)
console.log(bracketMatching("{)(}") === false)
console.log(bracketMatching("{abc}d") === true)
