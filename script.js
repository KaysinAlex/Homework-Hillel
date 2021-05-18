// ДЗ
function getOperator(questionOperator) {
   let answer = '';
   do {
     answer = prompt(questionOperator)
   } while (!isOperatorValid(answer));
   return answer;
  
 }
 function isOperatorValid(operator) {
    return (
     operator === '+' ||
     operator === '-' ||
     operator === '*' ||
     operator === '/');
}
  
function getOperand(questionOperand) {
  let arrOperands = '';
  do {
    arrOperands = prompt(questionOperand);
  } while (arrOperands === null || arrOperands === '');
  arrOperands = arrOperands.split(',');
  return arrOperands.map(Number).filter(isFinite);
}

function getCalculate(operator) {
  calc = numsOperand[0];
  for (let i = 1; i < numsOperand.length; i++) {
    switch (operator) {
      case "+":
        calc = calc + numsOperand[i];
        break;
      case "-":
        calc = calc - numsOperand[i];
        break;
      case "*":
        calc = calc * numsOperand[i];
        break;
      case "/":
        calc = calc / numsOperand[i];
        break;
    }
  }
  return calc;
}



const operator = getOperator('Введите оператор: + - * /');
let numsOperand = getOperand('Введите любое количество операндов через запятую');
let result = getCalculate(operator);
alert(`${numsOperand.join( operator)} = ${result}`);



/* Решение дз 4
function getOperator(something) {
   let answer = '';
   do {
     answer = prompt(something);
   } while (!isOperatorValid(answer));
   return answer;
 }

 function isOperatorValid(operator) {
   return (
     operator === '+' ||
     operator === '-' ||
     operator === '*' ||
     operator === '/'
    );
 }

   function getQuantityOperands(something) {
       let quantityOperands = '';
     do {
     quantityOperands = prompt(something);
     } while (!isQuantityValid(quantityOperands));
  
     return +(quantityOperands);
 }

     function isQuantityValid(value) {
   return !isNaN(value) && (value >=2 && value <=5);
 }

 function getOperand(something) {
   let answer = '';
   do {
     answer = prompt(something);
   } while (!isOperandValid(answer));
   return +answer;
 }
 function isOperandValid(value) {
   return !isNaN(value) && value !== null && value !== '';
 }

function calc(quantityOperands, operator) {
  let calcResult = '';
  let calculateOperand = '';
  for (let operand = 1; operand <= quantityOperands; operand++) {
    const enterOperand = getOperand(`Введите число ${operand}`);
    if (calcResult === '') {
      calcResult = enterOperand;
      calculateOperand = `${enterOperand}`;
    } else {
      switch (operator) {
        case '+':
          calcResult = calcResult + enterOperand;
          calculateOperand = `${calculateOperand} + ${enterOperand}`;
          break;
        case '*':
          calcResult = calcResult * enterOperand;
          calculateOperand = `${calculateOperand} * ${enterOperand}`;
          break;
        case '-':
          calcResult = calcResult - enterOperand;
          calculateOperand = `${calculateOperand} - ${enterOperand}`;
          break;
        case '/':
          calcResult = calcResult / enterOperand;
          calculateOperand = `${calculateOperand} / ${enterOperand}`;
          break;
      }
    }
  }
     calculateOperand = `${calculateOperand} = ${calcResult}`;

     alert(calculateOperand);
}
 
 const operator = getOperator('Введите операнд  + - * /');
 const quantityOperands = getQuantityOperands('Введите колличество операндовот 2 до 5');
 calc(quantityOperands, operator);

*/

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
/*function getOperator() {
  let answer = '';
  do {
    answer = prompt('Введите один из операторов: + - * /');
  } while (answer !== '+'&& answer !== '-'&& answer !== '*'&& answer !== '/');
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

function getCalculate() {
  
  switch (operator) {
  case '+':
   return  number1 + number2;
  case '-':
   return  number1 - number2;
  case '*':
   return  number1 * number2;
  case '/':
   return  number1 / number2;
  }

}
const calculate = getCalculate();
const result =`${number1} ${operator} ${number2} = ${calculate}`


alert(result); 
*/
