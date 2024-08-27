// a igualdade estrita checa o valor e o tipo. No JS ele meio que considera o numero 10 igual à string '10'. Então utilizamos a igualdade estrita para diferenciar.

const num1 = 10; // number
const num2 = '10'; // string
const compare = num1 == num2;
console.log(compare)

const num3 = 10;
const num4 = '10';
const compare1 = num3 === num4;
console.log(compare1)
