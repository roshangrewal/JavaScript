function capitalize(str) {
/** Solution 1:
    const capitalizeWord = [];
    for(let word of str.split(' ')) {
        capitalizeWord.push(word[0].toUpperCase() + word.slice(1));
    }
    return capitalizeWord.join(' ');
*/

    // Solution 2:
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;

}

console.log(capitalize('a short sentence'));
console.log(capitalize('a Lazy fox.'));
console.log(capitalize('look, it is working i think :)'));

module.exports = capitalize;
