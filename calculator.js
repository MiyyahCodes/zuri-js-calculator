const firstNum = parseFloat(prompt ('Input the first number: '));  
const secondNum = parseFloat(prompt ('Input the second number: '));  

const calculate = prompt('Enter +, -, * or / : ');

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