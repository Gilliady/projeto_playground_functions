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
  if (canGenerate) {
    message = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  } else {
    message = cantGenerate(array, numberRepeat, arrayValues);
  }
  return message;
};
console.log(generatePhoneNumber([0, 1, 6]));
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
