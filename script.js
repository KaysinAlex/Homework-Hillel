// let question = 'What is your name?';
// let userName = prompt(question);
// alert(`Hello,` + userName + `! How are you?`);
// alert(`Hello, ${userName}! How are you?`);


let operator = prompt(
  "Введите одно из значений математического оператора + - * /"
);
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
