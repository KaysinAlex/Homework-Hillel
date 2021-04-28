// let question = 'What is your name?';
// let userName = prompt(question);
// alert(`Hello,` + userName + `! How are you?`);
// alert(`Hello, ${userName}! How are you?`);


let operator = prompt(  "Введите одно из значений математического оператора + - * /");
let firstNumber = Number(prompt("Введите первое число"));
let secondNumber = Number(prompt("Введите второе число"));

const getMathAnswer = (optr) => {
  if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else if (operator === "/") {
    return firstNumber / secondNumber;
  }
};

let formulaStr = `${firstNumber} ${operator} ${secondNumber} = ${getMathAnswer(operator)}`;

alert(formulaStr); 


/* let operator = prompt('Введите одно из значений математического оператора + - * /');
let firstNumber = Number(prompt('Введите первое число')); 
let secondNumber = Number(prompt('Введите второе число'));

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  }
function minus(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
  
function divided(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function times(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
  

if (operator === '+') {
  alert(`${firstNumber} + ${secondNumber} = ${sum(firstNumber, secondNumber)}.`);
} else if (operator === '-') {
    alert(`${firstNumber} - ${secondNumber}' = ${minus(firstNumber, secondNumber)}.`);
} else if (operator === '/') {
    alert(`${firstNumber} / ${secondNumber} = ${divided(firstNumber , secondNumber)}.`);
} else if (operator === '*') {
    alert(`${firstNumber} * ${secondNumber} = ${times(firstNumber , secondNumber)}.`);
}
*/
