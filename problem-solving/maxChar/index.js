function maxChar(str) {
    const charCount = {};
    let maxValue = 0;
    let maxChar = '';
    for(char of str) {
        if(charCount[char]) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }
    // console.log(charCount);

    for(let char in charCount) {
        if(charCount[char] > maxValue) {
            maxValue = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

let a = maxChar('abcdefghibbbabcdabcaba')
console.log(a);

module.exports = maxChar;
