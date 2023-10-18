//STEP 1
function halfNumber(number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
    }
//STEP 2
function squareNumber(number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
  }
//STEP 3
function percentOf(num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent}% of ${num2}.`);
    return percent;
  }
//STEP 4
function findModulus(num1, num2) {
    const modulus = num1 % num2;
    console.log(`${num1} is the modulus of ${num2} and ${modulus}.`);
    return modulus;
  }
//STEP 5
halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(2, 10);