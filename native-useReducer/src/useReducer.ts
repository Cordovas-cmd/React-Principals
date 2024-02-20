const numbers = [10,20,30];

let total = 0;
// loop through numbers add all values together
for(const n of numbers) {
    total +=n;
}
total;



// same thing using a reducer function, take two parameters, an initial function, and an initial value
// in this case the first value (cv) is the initial value, second: takes the number at the given index as it iterates through the array, => output is the new value for next iteration
// need to learn reducer especially for redux
numbers.reduce((cv, n) => cv + n,0)
