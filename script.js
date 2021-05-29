'use scrict';
//Дз 10 

function getUserName() {
  do {
    answer = prompt('Введите Ваше имя');
  } while (answer === null || answer === '');
  return answer
}
const userName = getUserName();

const header = document.getElementById('greeting');

header.textContent = header.textContent + ` ${userName}!!!`;









//дз 9 рекурсия

/* function createCalculator(value) {
 
  return {
    sub: (num) => (value -= num),
    add: (num) => (value += num),
    div: (num) => (value /= num),
    mult: (num) => (value *= num),
    set: (num) => (value = num),
  };
} 

const calc = createCalculator(100);
console.log(calc.sub(50));
console.log(calc.add(45));
console.log(calc.set(500));
console.log(calc.div(100));
console.log(calc.mult(105));
 */

/* Дз 8. Калькуьор с помощью массивов
Добавлено: 21.05.2021 21:16

 1) с помощью промта спрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор пока он введет допустимое значение
2) спрашиваем у пользователя операнды, он их вводит в одном промте через запятую. То что введет пользователь не должно быть пустой строкой или null.
3) Отфильтровываем все четные и невалидные значение
4) С помощью alert или console.log выводим результат действия (+ - / *) с отсавшимися операндами. Если один из операндов не число, то мы его просто пропускаем.
Н-р "1 + 1 + 3 = 5" 
 

function getOperator() {
   let answer = '';
   do {
     answer = prompt('Введите оператор: + - * /')
   } while (!isOperatorValid(answer));
   return answer;
}
 function getOperands() {
    let answer;
   do {
    answer = prompt('Введите любое количество операндов через запятую');
  } while (!isOperandsValid(answer));

   return answer.split(',').filter((i) => i % 2 === 1)
  }
 function isOperatorValid(str) {
    return (
     str === '+' ||
     str === '-' ||
     str === '*' ||
     str === '/');
}
  
function isOperandsValid(str) {
  return str !== null && str !== '';
 }

function isValidOperand(num) {
  return !isNaN(num);
 }

function calculate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
   }
}
 
const operator = getOperator();
const operands = getOperands();
//console.log(operands);
let result = null;
let expression = '';

for (let i = 0; i < operands.length; i++) {
  const operand = +operands[i];

  if (!isValidOperand(operand)) {
    continue;
  } 
  if (result === null) {
      result = operand;
      expression = operand;
      continue;
  }
  
   result = calculate(operator, result, operand);
   expression += `${operator} ${operand} `;
}
  
alert(`${expression} = ${result}`);
*/

// ДЗ Студенты

/* const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

const averageGroupMark = function (students) {
  let sum = 0;
  let markCount = 0;
    // console.log('sum', sum);
     //console.log('markCount', markCount);
  students.forEach(currentStudent => {
    markCount = markCount + currentStudent.marks.length;
    currentStudent.marks.forEach(currentMark => {
      sum += currentMark;
       //      console.log('sum', sum);
    })
  })
  return sum / markCount;
}

function averageStudentMark(student) {
 // console.log('in averageStudentMark', student)
  let sum = 0;
  //   for (let i = 0; i <= student.marks.length - 1; i++) {
  //     sum += student.marks.length;
  //   } return sum / student.marks.length
  // }
  student.marks.forEach(currentMark => {
    sum += currentMark;

  }); const averageStudentMark = sum / student.marks.length;
  return {
    ...student,
    averageStudentMark
    };
  }
  


console.log(averageStudentMark(students[3]));
console.log(averageGroupMark(students));
 */


/* ДЗ
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


*/


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
