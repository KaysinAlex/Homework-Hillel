// let question = 'What is your name?';
// let userName = prompt(question);
// alert(`Hello,` + userName + `! How are you?`);
// alert(`Hello, ${userName}! How are you?`);

 // Homework 2
/*let operator = prompt(  "Введите одно из значений математического оператора + - * /");
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

// Homework 2 
 let operator = prompt('Введите одно из значений математического оператора + - * /');
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
// Homework 3
function getOperator() {
  let answer = '';
  do {
    answer = prompt('Введите один из операторов: + - * /');
  } while (answer !== '+'&& answer !== '-'&&answer !== '*'&&answer !== '/');
  return answer;
}
const operator = getOperator();

function getNumber1() {
  let answerNum1 = '';
  do {
    answerNum1 = +prompt('Введите первое число');
  } while (isNaN(answerNum1));
  return answerNum1
}
const number1 = getNumber1();


function getNumber2() {
  let answerNum2 = '';
  do {
    answerNum2 = +prompt('Введите второе число');
  } while (isNaN(answerNum2));
  return answerNum2
}
const number2 = getNumber2();

let result = 0;
  switch (operator) {
  case '+':
    result = number1 + number2;
    break   
  case '-':
    result = number1 - number2;
    break
  case '*':
    result = number1 * number2;
    break
  case '/':
    result = number1 / number2;
    break
  }


alert(`${number1} ${operator} ${number2} = ${result}`); 
