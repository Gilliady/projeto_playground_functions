// Desafio 1 - Crie a função compareTrue
const compareTrue = (boolean1, boolean2) => (boolean1 && boolean2);
// Desafio 2 - Crie a função splitSentence
const splitSentence = (phrase) => phrase.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;
// Desafio 5 - Crie a função highestCount
const higherNumber = (array) => {
  let higher = array[0];
  for (const number of array) {
    if (higher < number) higher = number;
  }
  return higher;
};
const highestCount = (array) => {
  let count = 0;
  let higher = higherNumber(array);
  for (const number of array) {
    if (number === higher) {
      count += 1;
    }
  }
  return count;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => ((base * height) / 2);
const calcRectangleArea = (base, height) => (base * height);
const calcAllAreas = (base, height, form) => {
  let returnString = '';
  switch (form) {
  case 'triângulo':
    returnString += `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
    break;
  case 'retângulo':
    returnString = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
    break;
  default:
    returnString = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
    break;
  }
  return returnString;
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  if (distanceCat1 < 0) distanceCat1 *= -1;
  if (distanceCat2 < 0) distanceCat2 *= -1;
  let closest;
  if (distanceCat1 < distanceCat2) {
    closest = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    closest = 'cat2';
  } else {
    closest = 'os gatos trombam e o rato foge';
  }
  return closest;
};
// Desafio 8 - Crie a função fizzBuzz
const divisors = (number, phrase) => {
  if (number % 3 === 0 && number % 5 === 0) {
    phrase.push('fizzBuzz');
  } else if (number % 3 === 0) {
    phrase.push('fizz');
  } else if (number % 5 === 0) {
    phrase.push('buzz');
  } else {
    phrase.push('bug!');
  }
};
const fizzBuzz = (array) => {
  let phrase = [];
  for (const number of array) {
    divisors(number, phrase);
  }
  return phrase;
};
console.log(fizzBuzz([5, 9]));
// Desafio 9 - Crie a função encode e a função decode
let codeAlphabet = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};
const encode = (phrase) => {
  let newPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (Object.hasOwnProperty.call(codeAlphabet, phrase[index])) {
      newPhrase += codeAlphabet[phrase[index]];
    } else {
      newPhrase += phrase[index];
    }
  }
  return newPhrase;
};
const decode = (phrase) => {
  let newPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (Object.hasOwnProperty.call(codeAlphabet, phrase[index])) {
      console.log(phrase[index]);
      newPhrase += codeAlphabet[phrase[index]];
      console.log(newPhrase);
    } else {
      newPhrase += phrase[index];
    }
  }
  return newPhrase;
};
// Desafio 10 - Crie a função techList
const techList = (array, string) => {
  const tech = [];
  array.sort();
  if (array.length > 0 && string.length > 0) {
    for (const technology of array) {
      tech.push({ tech: technology, name: string });
    }
  }
  return tech;
};
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
