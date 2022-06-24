const firstNum = parseFloat(prompt ('Input the first number: '));  
const calculate = prompt('Enter +, -, * or / : ');
const secondNum = parseFloat(prompt ('Input the second number: '));  
if (calculate == '+') {
    result = firstNum + secondNum;  
}
else if (calculate == '-') {
    result = firstNum - secondNum;  
}  
else if (calculate == '*') {
    result = firstNum * secondNum;  
}  
else {  
    result = firstNum / secondNum;
}
alert("The result is " + result);  