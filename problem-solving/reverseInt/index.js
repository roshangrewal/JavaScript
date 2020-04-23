function reverseInt(n) {
/* Solution 1: Short n cool 
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
*/

    // Solution 2: Without creating array and without using its reverse method
    const strNum = n.toString();
    let reversedStr = '';
    for(let num of strNum) {
        reversedStr = num + reversedStr;
    }
    if(n < 0) {
        return parseInt(reversedStr) * -1;
    }
    return parseInt(reversedStr);
    //    OR - instead of if() we can use Math.sign() method but for that we need to convert string into array.

}

console.log(reverseInt(51));
console.log(reverseInt(-12));

module.exports = reverseInt;
