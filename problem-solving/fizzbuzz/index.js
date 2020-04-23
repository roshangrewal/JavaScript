function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) { 
        //we can also make condition like i % 15 === 0 bcs we are checking for 3 n 5, mul 3 n 5, which is 15
            console.log('fizzbuzz');
        }
        else if(i % 3 === 0) {
            console.log('fizz');
        }
        else if(i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(20));

module.exports = fizzBuzz;
