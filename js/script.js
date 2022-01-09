
// 1 Задание:

// пример 1
let a = 1, b = 1, c, d;
c = ++a;
console.log(c); // Ответ: 2 потому что вначале происходит префмксное инкрементирование a = a + 1; и только потом выводится результат

// пример 2

d = b++;
console.log(d); // Ответ: 1 потому что вначале происходит постфиксное инкрементирование вначале выдает результат и только потом увеличивает на еденицу

// Пример 3

c = 2 + ++a;
console.log(c); // Ответ: 5 потому что в переменной а уже было инкр-ие и происходит еще раз и получается что в а лежит число 3, и получается что 2+3=5

d = 2 + b++;
console.log(d); // Ответ: 4 потому что в переменной b уже было пост-ое инкр-ие и в ней лежит число 2, так как происходит опять пост-ое инкр-ие то получается 2+2=4

console.log(a); //Ответ: 3 потому что у данной переменной было 2 раза преф-ое инкр-ие
console.log(b); //Ответ: 3 потому что у данной переменной было 2 раза пост-ое инкр-ие

// 2 Задание:

let z = 2;
let x = 1 + (z *= 2); // Ответ: 5 потому что тут применена краткая форма оператора "*=", которая соответствует полной форме выражения: let x = 1 + (z = z * 2).
// вот и получаем в х = 5

console.log(x);

// 3 Задание:

let q = 7;
let w = 4;

if (q > 0 && w > 0) {
    e = q - w;
    console.log(e);
} else if (q < 0 && w < 0) {
    e = q * w;
    console.log(e);
}

// 4 Задание: 

function summ(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a * b;
}

// 5 Задание:

function mathOperation(arg1, arg2, operation) {
    let result = false;

    switch (operation) {
        case "summ":
            result = arg1 + arg2;
            break;
        case "difference":
            result = arg1 - arg2;
            break;
        case "multiplication":
            result = arg1 * arg2;
            break;
        case "division":
            result = arg1 / arg2;
            break;
    }
    return result;
}

console.log(mathOperation(15, 50, "multiplication"));