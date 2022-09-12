let FirstNumber = prompt ("Enter the first number");
let SecondNumber = prompt ("Enter the second number");
FirstNumber = parseFloat (FirstNumber);
SecondNumber = parseFloat (SecondNumber);
let sum = FirstNumber + SecondNumber;
alert ("the sum is:" + "" + sum);

let division = FirstNumber / SecondNumber;

if ( SecondNumber == 0) {
    alert ("You cannot divide by zero");
}
else {
    alert ("the sum is:" + "" + division);
}