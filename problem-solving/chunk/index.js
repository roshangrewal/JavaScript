const chunk = ((array, size) => {
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
});

console.log(chunk([1, 2, 3, 4], 2));


module.exports = chunk;
