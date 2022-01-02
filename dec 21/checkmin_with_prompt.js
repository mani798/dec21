// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let minimum;

// check the condition
if(num1 <= num2 && num1 <= num3) {
    minimum = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    minimum = num2;
}
else {
    minimum = num3;
}


alert("The minimum number is " + minimum);