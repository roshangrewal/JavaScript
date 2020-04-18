var arr = [1,2,3,4,5];

function simpleArraySum(ar) {
    /*
     * Write your code here.
     * 
     */
    var temp = 0;
    for(let all of ar){
        temp = temp + all;
    }
    return temp;

}

console.log(simpleArraySum(arr));