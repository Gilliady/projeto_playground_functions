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

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

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
