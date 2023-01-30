// Desafio 11 - Crie a função generatePhoneNumber
const verifyNumbersValue = (array, canGenerate) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      canGenerate = false;
    }
  }
  return canGenerate;
};
const generateNumerCounters = (array) => {
  const counters = {};
  for (let index = 0; index < array.length; index += 1) {
    if (Object.prototype.hasOwnProperty.call(counters, array[index])) {
      counters[array[index]] += 1;
    } else {
      counters[array[index]] = 1;
    }
  }
  return counters;
};
const verifyNumbersRepeat = (counters, canGenerate) => {
  for (const key in counters) {
    if (counters[key] >= 3) {
      canGenerate = false;
    }
  }
  return canGenerate;
};
const cantGenerate = (array, numberRepeat, arrayValues) => {
  let message = '';
  if (array.length !== 11) {
    message = 'Array com tamanho incorreto.';
    if (array.length !== 11 && arrayValues === false) {
      message = 'Array com tamanho incorreto.';
    }
  } else {
    message = 'não é possível gerar um número de telefone com esses valores';
  }
  return message;
};
const generatePhoneNumber = (array) => {
  let message = '';
  const counters = generateNumerCounters(array);
  const numberRepeat = verifyNumbersRepeat(counters, true);
  const arrayValues = verifyNumbersValue(array, true);
  let canGenerate = numberRepeat && arrayValues && array.length === 11;
  const firstSection = `(${array[0]}${array[1]})`;
  const secondSection = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const lastSection = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  if (canGenerate) {
    message = `${firstSection} ${secondSection}-${lastSection}`;
  } else {
    message = cantGenerate(array, numberRepeat, arrayValues);
  }
  return message;
};
// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  let isATriangle = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineC - lineB)) {
    isATriangle = true;
  }
  return isATriangle;
};
// Desafio 13 - Crie a função hydrate
const hydrate = (drinks) => {
  let reg = /\d+/g;
  let sum = 0;
  let numbers = drinks.match(reg);
  console.log(numbers);
  for (const number of numbers) {
    sum += parseInt(number, 10);
  }
  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
};
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
