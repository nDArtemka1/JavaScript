
// 1 Задание:

//в переменную Tc присваиваем значение равное 15 градусов по цельсию
var Tc = 15;
// переменная Tf вычесляет по формуле темп-ру по фаренгейту
var Tf = (9 / 5) * Tc + 32;
// выводим в консоль
console.log(Tf);

// 2 Задание:

// в переменную name присваиваем строку со значением Василий
var name = 'Василий';
// в переменную admin присваиваем значение переменной name
var admin = name;
// выводим в консоль
console.log(admin);

// 3 Задание:

var a = 10 + 10 + '10';
var b = 10 + '10' + 10;
//var c = 10 + 10 ++'10';
var d = 10 / '2.5';

console.log(a); // в начале происходит сложение, так как их тип число, далее 
// это все превращается в строку из-за того что у 3-го числа тип данных строка 

console.log(b); // все значения становятся строкой
//console.log(c); // тут синтаксиченская ошибка, скорее всего программа думает что надо выполнить инкремент
console.log(d); // при делении строка превращается в число..
