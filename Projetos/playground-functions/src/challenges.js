// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(palavras) {
  let array = palavras.split(' ');
  return array;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  if (array.length === 2) {
    let primeiro = array[0];
    let ultimo = array[1];
    return `${ultimo}, ${primeiro}`;
  }
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  return `${ultimo}, ${primeiro}`;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
console.log(footballPoints(3, 3));

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let cont = 0;
  for (let a = 0; a < array.length; a++) {
    if (array[a] < 0) {
      if (maior === array[a]) {
        cont++;
      }
      if (maior > array[a]) {
          cont = 0;
          cont++;
          maior = array[a];
        }
      }
      if (maior === array[a]) {
        cont++;
      }
      if (maior < array[a]) {
          cont = 0;
          cont += 1;
          maior = array[a];
        }
      }
      return cont;
    } 
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = mouse - cat1;
  if (d1 < 0) {
    d1 *= (-1);
  }
  let d2 = mouse - cat2;
  if (d2 < 0) {
    d2 *= (-1);
  }
  if (d1 === d2) {
    return 'os gatos trombam e o rato foge';
  }
  if (d1 > d2) {
    return 'cat2';
  }
  return 'cat1';
}
console.log(catAndMouse(0, 3, 2));

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let a = 0; a < array.length; a++) {
    if (array[a] % 3 === 0 && array[a] % 5 !== 0) {
      newArray.push('fizz');
    }
    if (array[a] % 5 === 0 && array[a] % 3 !== 0) {
      newArray.push('buzz');
    }
    if (array[a] % 5 === 0 && array[a] % 3 === 0) {
      newArray.push('fizzBuzz');
    }
    if (array[a] % 5 !== 0 && array[a] % 3 !== 0) {
      newArray.push('bug!');
    }
  }
  return newArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(palavra) {
  for (let b = 0; b < palavra.length; b += 1) {
    palavra = palavra.replace('a', '1');
    palavra = palavra.replace('e', '2');
    palavra = palavra.replace('i', '3');
    palavra = palavra.replace('o', '4');
    palavra = palavra.replace('u', '5');
  }
  return palavra;
}

function decode(palavra) {
  for (let b = 0; b < palavra.length; b += 1) {
    palavra = palavra.replace('1', 'a');
    palavra = palavra.replace('2', 'e');
    palavra = palavra.replace('3', 'i');
    palavra = palavra.replace('4', 'o');
    palavra = palavra.replace('5', 'u');
  }
  return palavra;
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
