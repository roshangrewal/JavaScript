function reverse(str) {
/* Solution 1: Using array method 
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
            OR
    // return str.split('').reverse().join('');
*/
    

/* Solution 2: Using for of loop
    let reversedString = '';
    for (let character of str) {
        reversedString = character + reversedString;
    }
    return reversedString;
*/

/* Solution 3:
    return str.split('').reduce((rev, char) => {
        return rev = char + rev;
    }, '');
            OR
    // return str.split('').reduce((rev, char)=> rev = char + rev, '');
*/


    // Solution 4: My Favorite 
    const arr = str.split('');
    let reversedArr = [];
    for(let i = arr.length; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr.join('');
}



console.log(reverse('Hello'));

module.exports = reverse;
