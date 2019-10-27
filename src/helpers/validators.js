/* 
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import {
    replace,
    length,
    compose,
    test,
    lt,
    gt,
    flip,
    allPass,
    anyPass,
    includes,
    not,
} from 'ramda';

const replaceNumbers = replace(/[^0-9]/g, '');

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);

const flippedGt = flip(gt);
const flippedLt = flip(lt);

const greaterThenOne = flippedGt(1);

const lesserThenTwo = flippedLt(2);
const greaterThenTwo = flippedGt(2);

const greaterThenThree = flippedGt(3);

const lesserThenFour = flippedLt(4);
const greaterThenFour = flippedGt(4);

const lesserThenFive = flippedLt(5);
const greaterThenFive = flippedGt(5);

const greaterThenEight = flippedGt(8);
const lesserThenEight = flippedLt(8);

const lesserThenTen = flippedLt(10);

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */

const numbersGreaterThenOne = compose(greaterThenOne, getNumbersCount);

const numbersLesserThenTwo = compose(lesserThenTwo, getNumbersCount);
const numbersGreaterThenTwo = compose(greaterThenTwo, getNumbersCount);

const numbersGreaterThenThree = compose(greaterThenThree, getNumbersCount);

const numbersGreaterThenFour = compose(greaterThenFour, getNumbersCount);

const numbersLesserThenFive = compose(lesserThenFive, getNumbersCount);


/**
 * Функции для проверки выполнения условий с длиной строки
 */

const lengthLesserThenFive = compose(lesserThenFive, length);
const lengthGreaterThenFive = compose(greaterThenFive, length);

const lengthLesserThenFour = compose(lesserThenFour, length);

const lengthLesserThenEight = compose(lesserThenEight, length);
const lengthGreaterThenEight = compose(greaterThenEight, length);

const lengthLesserThenTen = compose(lesserThenTen, length);

/**
 * Функции для проверки наличия конкретного символа в строке
 */

const includesFour = includes(4);
const notIncludesFour = compose(not, includesFour);

const includesSeven = includes(7);


// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = allPass([lengthLesserThenFive, numbersGreaterThenTwo]);

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = allPass([lengthLesserThenFive, numbersLesserThenTwo]);

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = anyPass([lengthGreaterThenFive, numbersGreaterThenOne]);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = allPass([lengthLesserThenTen, numbersGreaterThenTwo, includesFour]);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = allPass([lengthLesserThenTen, numbersGreaterThenOne, notIncludesFour]);

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = anyPass([lengthGreaterThenFive, includesSeven]);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = allPass([lengthGreaterThenEight, numbersGreaterThenThree, containsOnlyEng]);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = anyPass([numbersLesserThenFive, containsOnlyEng, includesSeven]);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = allPass([lengthLesserThenEight, numbersGreaterThenFour, containsOnlyEng]);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = anyPass([lengthLesserThenFour, numbersGreaterThenTwo, containsOnlyEng]);
