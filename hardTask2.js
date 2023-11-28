'use strict'

const number1 = Number(prompt('Введите первое число:'));
const number2 = Number(prompt('Введите второе число:'));

//хотя нет, тут пришлось хорошенько подумать 0_0

const findMin = (a, b) => {
    return (a + b - Math.abs(a - b)) / 2;
}

const minimum = findMin(number1, number2);

console.log(`Минимальное число: ${minimum}`);