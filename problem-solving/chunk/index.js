const chunk = ((array, size) => {
/** Solution 1:
    const chunked = [];

    for(let elem of array) {
        const last = chunked[chunked.length - 1];

        if(!last || last.length === size) {
            chunked.push([elem]);
        } else {
            last.push(elem);
        }
    }
    return chunked;
*/

    // Solution 2:
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked; 

});

console.log(chunk([1, 2, 3, 4, 5], 2));

module.exports = chunk;
