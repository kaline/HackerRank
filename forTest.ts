function checkNumbers(){
const numbers: number[] = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var evenNumbers = [];
var oddNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 1) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}

console.log("The even numbers are: " + evenNumbers); // "The even numbers are: 4,44,64,24,32,74,22"
console.log("The odd numbers are: " + oddNumbers); // "The odd numbers are: 1,55,55,19,17,23"


}

checkNumbers()