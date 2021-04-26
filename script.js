// let question = 'What is your name?';
// let userName = prompt(question);
// alert(`Hello,` + userName + `! How are you?`);
// alert(`Hello, ${userName}! How are you?`);

let operator = prompt('Введите одно из значение математического оператора + - * /');
let firstNumber = prompt('ВВедите первое число');
let secondNumber = prompt('Введите второе число');

if (operator =='-') {
  alert(firstNumber - secondNumber);
}
// else if (operator == '+') {
// alert(firstNumber + secondNumber);
// } else if (operator == '*') {
// alert(firstNumber * secondNumber);
// } else if (operator == '/') {
// alert(firstNumber / secondNumber);
// }
//С помощью alert выводим результат действия со всеми операндами (Н-р "2 + 3 = 5" )