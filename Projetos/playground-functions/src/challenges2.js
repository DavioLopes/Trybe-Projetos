/* eslint-disable no-useless-concat */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// Desafio 10
function techList(array, pessoa) {
  let vazio = 'Vazio!';
  let i;
  if (array.length === 0) {
    return vazio;
  } {
    array.sort();
    let newArray = [];
    let texto = {};
    for (i = 0; i < array.length; i += 1) {
      texto = {
        tech: array[i],
        name: pessoa,
      };
      newArray.push(texto);
    }
    return newArray;
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'teste'));

// Desafio 11
function generatePhoneNumber(array) {
  let mens;

  if (array.length !== 11) {
    mens = 'Array com tamanho incorreto.';
    return mens;
  }
  for (let i = 0; i < array.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        cont += 1;
        if (cont >= 3) {
          mens = 'não é possível gerar um número de telefone com esses valores';
          return mens;
        }
      }
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      mens = 'não é possível gerar um número de telefone com esses valores';
      return mens;
    }
  }
  // eslint-disable-next-line max-len
  mens = `(${array[0]}${array[1]})` + ` ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return mens;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(a, b, c) {
  if (c < a + b && c > Math.abs(a - b)) {
    return true;
  }
  if (a < c + b && a > Math.abs(c - b)) {
    return true;
  }
  if (b < a + c && c > Math.abs(a - c)) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(texto) {
  let fun = /\d+/g;
  let array = texto.match(fun);
  let soma = 0;
  for (let a = 0; a < array.length; a += 1) {
    soma += parseInt(array[a], 10);
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}
console.log(hydrate('1 banana + 1 pineapple + 3 oranges'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
