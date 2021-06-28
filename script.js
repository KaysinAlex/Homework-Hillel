'use scrict';
log = console.log;
// дз калькулятор
/* function Calculator(item) {
  let result = item;
  this.add = (num) => (this.result += num);
  this.sum = function (num) {
    return result += num;
  };

  this.mult = function (num) {
    return result*=num;
  };

  this.sub = function (num) {
    return result-=num;
  };

  this.div = function (num) {
    return result /= num;
  };
}


let calc = new Calculator(10);

log(calc.sum(5));
log(calc.mult(10));
log(calc.sub(40));
log(calc.div(10));
 */


// Дз 12 Реализовать список todo
/* на странице есть список, под списком форма с инпутом и кнопкой, с помощью них пользователь может добавлять новые дела в список.
При клике на какое - то дело в списке, оно становится зеленым, при повторном клике возвращается в дефолтный цвет.
Любое дело из списка можно удалить
Обязательно делаем со слоем данных
Дополнительное задание:
Сохранять состояние в localstorage */


/* const DELETE_BLOCK_LIST_ELEMENT = 'block_list-delete';
const BLOCK_LIST_ELEMENT = 'block_list-element';

const newTemplateTodo = document.getElementById('block_template').innerHTML; // доступ к скрипту в котором шаблон преобразуем в строку кода
const blockListTodo = document.getElementById('block_list');
const newTodoInput = document.getElementById('block_form-input');

let blockTodoList = []; // создаем массив в которій будем пушить  todo 

document.getElementById('block_form-btn').addEventListener('click', onAddBtnClick);// обработчик на клик по кнопке
blockListTodo.addEventListener('click', onBlockClick); // на клик по блоку задания

init();

function onAddBtnClick() {
  if (isInputValid(newTodoInput.value)) {
    const newTodo = getBlockData();
    addTodo(newTodo);
    resetInput();
  }
}
function onBlockClick(e) { // функция  где на блоке нажали
  log('click', e.target); // чтоб видеть куда нажали
  if (e.target.classList.contains(BLOCK_LIST_ELEMENT)) {// Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. Параметром метода передается элемент, который будет проверяться на то, что он находится внутри элемента, к которому применился метод
    log('click block'); //  если нажать чтоб поменять цвет создадим ф-ию. смены класса
    toggleBlockElem(e.target);//  передадим место клика для распознавания нужного
    log('click target');
  }
  if (e.target.classList.contains(DELETE_BLOCK_LIST_ELEMENT)) {// если нажали на крестик тогда выполним удаление по id 
    const blockTodoListId = getTodoListId(e.target);
    deleteBlockElem(blockTodoListId);
    log('delete');    
  }
}
function init() {
  restoreFromStorage();
  renderBlockListTodo(blockTodoList);
}

function getTodoListId(el) {
  const blockList = el.closest('.' + BLOCK_LIST_ELEMENT);// // возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору
  return +blockList.dataset.blockTodoListId;
}

function toggleBlockElem(el) {
  el.classList.toggle('done');// Используем метод-переключатель classList.toggle и убедимся, что при нажатии на кнопку  у элемента будет то убираться, то добавляться класс.
}

function deleteBlockElem(id) {
  log('id');
  blockTodoList = blockTodoList.filter((item) => item.id !== id);// отфильтруем по id 
  saveToStorage();
  renderBlockListTodo(blockTodoList);// и прорендерим его
}

function addTodo(text) {
  blockTodoList.push(text); // пушу в массив данные которые пришли аргументом
  log('push text');
  saveToStorage();
  renderBlockListTodo(blockTodoList); // создать ф-цию для перебора массива
}

function renderBlockListTodo(block) {
  blockListTodo.innerHTML = '';//устанавливает или получает HTML  разметку дочерних элементов ol где будут  li
  block.forEach((item) => renderTodo(item));// выполняет указанную функцию один раз для каждого элемента в массиве, создадим такую функцию 
  log('renderblocklisttodo');
}

function renderTodo(text) {
  const newTodoHtml = getNewTodoTemplate(text); // создадим переменную для взятия введенного значения 
  blockListTodo.insertAdjacentHTML('beforeend', newTodoHtml);//вставляем  введенный текст сразу перед закрывающим тегом element (после последнего потомка)
  log('renderTodo');
}
function getNewTodoTemplate(text) { // вставляем введенный текст через replace  шаблона 
  return newTemplateTodo
    .replace('{{text}}', text.text)
    .replace('{{id}}', text.id);
}
function getBlockData() {   // возвращаем обьект с данными
  log('getBlockData'); 
  return {
    id: Date.now(),
    text: newTodoInput.value,
  };
}
function isInputValid(str) { // валидация на пустой ввод через метод strim() который убирает все пробелы
  log('trim');
  return str.trim() !== '';
  }
function resetInput() {   // сброс инпута на пустую строку
  newTodoInput.value = '';
  log('newTodoInput reset');
}

function saveToStorage() {
  localStorage.setItem('blockTodoList', JSON.stringify(blockTodoList));
}

function restoreFromStorage() {
  const data = localStorage.getItem('blockTodoList');
  if (data !== null) {
    blockTodoList = JSON.parse(data);
  } else {
    blockTodoList = [];
  }
}
 */










// Дз 12 Список контактов
// Реализовать таблицу контактов.Таблица состоит из 4 - х колонок(Имя, Фамилия, номер, действия).
// Внизу таблицы находяться инпуты для ввода соответствующих данных и кнопка добавить.
// Также нужно реализовать валидацию, чтобы нельзя было добавить контакт с каким - то пустым полем
// В каждой строке контакта есть кнопка удалить, которая удаляет запись.
// Реализовать Вывод списка, добавление удаление.
  
/* log = console.log;
const contactTemplate = document.getElementById('newContactTemplate').innerHTML;
const contactsListEl = document.getElementById('contactsList');
const nameInputEl = document.getElementById('nameInput');
const surnameInputEl = document.getElementById('surnameInput');
const phoneInputEl = document.getElementById('phoneInput');

document
  .getElementById('addContactBtn')
  .addEventListener('click', onAddContactBtnClick);

function onAddContactBtnClick() {
  log('onAddContactBtnClick')
  if (isFormValid()) {
    const newContact = getFormData();
    addContact(newContact);

    resetForm();
  }
}
function onContactsListClick(e) {
  
  if (e.target.classList.contains('delete-btn')) {
    const el = getContactRow(e.target);
    deleteContact(el);
  }
}

function getContactRow(el) {
  log('deleteContact');
  return el.closest('.contact-item');
}

function deleteContact(el) {
  el.remove();
}

function isFormValid() {
  log('isFormValid')
  return (
    !isEmpty(nameInputEl.value) &&
    !isEmpty(surnameInputEl.value) &&
    !isEmpty(phoneInputEl.value)
  );
}

function isEmpty(str) {
  log('isEmpty');
  return str === '' || str === null;
  }

function addContact(contact) {
  log('addContact');
  const newContactHtml = getContactRowHtml(contact);
  contactsListEl.insertAdjacentHTML('beforeend', newContactHtml);
}

function getContactRowHtml(contact) {
  log('getContactRowHtml');
  return contactTemplate
    .replace('{{name}}', contact.name)
    .replace('{{surname}}', contact.surname)
    .replace('{{phone}}', contact.phone);
}
  
function getFormData() {
  log('getFormData');
  return {
    name: nameInputEl.value,
    surname: surnameInputEl.value,
    phone: phoneInputEl.value
  };
}
function resetForm() {
  log('resetForm');
  nameInputEl.value = '';
  surnameInputEl.value = '';
  phoneInputEl.value = '';  
} */








// Дз 11 To do list

/* const input = document.getElementById("block_form-input");
const btn = document.getElementById("block_form-btn");
const blockList = document.getElementById("block_list");


   function createElements(text) {
      const newElem = document.createElement("p");
      const deleteSpan = document.createElement("span");

      deleteSpan.className = "block_list-delete"
      deleteSpan.textContent = "delete";
      
      newElem.className = "block_list-elem";
      newElem.textContent = text;
      newElem.appendChild(deleteSpan);
      
      deleteSpan.addEventListener("click", () => blockList.removeChild(newElem));
      
      blockList.appendChild(newElem);
     }
    
        function clicked(e) {
          e.preventDefault();
            if (!(input.value === "" || input.value === "Enter: ")) {
              createElements(input.value);
              input.value = "Enter: ";
            }
          };


        btn.addEventListener("click", clicked)
        input.addEventListener("focus", () => input.value = "");

        input.addEventListener("blur", function () {
          if (input.value === "")
            input.value = "Enter: ";
          
        }); */
 

























//Дз 10 

/* function getUserName() {
  do {
    answer = prompt('Введите Ваше имя');
  } while (answer === null || answer === '');
  return answer
}
const userName = getUserName();

const header = document.getElementById('greeting');

header.textContent = header.textContent + ` ${userName}!!!`;
 */










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
