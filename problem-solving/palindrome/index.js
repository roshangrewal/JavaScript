function palindrome(str) {

/* Solution 1: Using array.every method
    return str.split('').every((char, i)=> {
        return char === str[str.length -i -1];
    });
*/

/* Solution 2: Not worked
    const inputArr = str.split('');
    const reversedArr = inputArr.reverse();
    let bool = false;
    for( let i = 0; i < inputArr.length; i++) {
        if(inputArr[i] == reversedArr[i]){
            bool = true;
        }
        else {
            bool = false;
            break;
        }
    }
    return bool;
*/

    
/* Solution 3: It will return either true or false
    const reversedStr = ab.split('').reverse().join('');
    return reversedStr === str;
*/

    // Solution 4: My favourite by making 2 more helper function
    let reversed = reverseHelper(str);
    return compareHelper(reversed, str);

}

const reverseHelper = function (ab) {
    return reversedStr = ab.split('').reverse().join('');
}

const compareHelper = (abc, def) => {
    return abc === def;
}


console.log(palindrome('abba'));
console.log(palindrome('roshan'));



module.exports = palindrome;
