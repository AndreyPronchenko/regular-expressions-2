// Задание 1
console.log('Напишите регулярное выражение для поиска всех слов, начинающихся с определенной буквы');
console.log(`Great day and wonderful weather`.match(/\bwonderful weather\b/));

// Задание 2
console.log('Создайте функцию, которая проверяет, является ли строка датой в формате "дд-мм-гг" с использованием регулярных выражений');
console.log('28-01-24 24-11-25 25.12.23 12-28-2024'.match(/\b\d\d-\d\d-\d\d\b/g));

// Задание 3
console.log('Напишите регулярное выражение для поиска всех слов, содержащих только русские буквы');
console.log('Greкat dсay anаd wondрerfuлl weatоher'.match(/([а-яё])/gi));

// Задание 4
console.log('Создайте функцию, которая проверяет, содержит ли строка только цифры с использованием регулярных выражений');
console.log('Нап3шит2е ре5гуля6рное вы1ра9же6н5ие'.match(/([0-9])/gi));

// Задание 5
console.log('Создайте функцию, которая проверяет, является ли строка палиндромом с использованием регулярных выражений');
function isPalindrome(string) {
    string = string.toLowerCase().replace(/\W/g, '');
    const stringArray = [...string];
    const newArray = [];
    stringArray.forEach(index => {
      newArray.unshift(index);
    });
    const reversedString = newArray.join('');
    console.log(string);
    return string === reversedString;
  }
  console.log(isPalindrome("A man, a plan, a canal, Panama!"));

// Задание 6
console.log('Напишите регулярное выражение для поиска всех слов, оканчивающихся на определенную букву');
console.log('Lorem ipsum dolor, sit amet Ipsum consectetur adipisicing'.match(/\w*g\w*/));

// Задание 7
console.log('Создайте функцию, которая проверяет, содержит ли строка только буквы верхнего регистра с использованием регулярных выражений');
console.log('Lorem ipsum dolor'.match(/^[A-Z]*/gi));
