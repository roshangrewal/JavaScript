function anagrams(stringA, stringB) {
    const aCharMap = createCharMap(stringA);
    const bCharMap = createCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for(char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;

}

function createCharMap(str) {
    const charMap = {};

    for(char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));


module.exports = anagrams;
