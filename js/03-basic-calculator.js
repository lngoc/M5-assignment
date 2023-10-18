// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        if (y !== 0) {
          return x / y;
        } else {
          return "Error: Division by zero";
        }
      default:
        return "Invalid operation";
    }
  }
  
// COLLECT FIRST NUMBER FROM USER
function mainCalculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
// COLLECT SECOND NUMBER FROM USER
const num2 = parseFloat(prompt("Enter the second number:"));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
const operation = prompt("Enter the operation (+, -, *, /):");
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
const result = calculate(num1, num2, operation);
  alert(`Result: ${result}`);
}
mainCalculator();