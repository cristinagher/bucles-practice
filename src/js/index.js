// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
//Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const firstLoop = (number) => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};
firstLoop(4);

//Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const secondLoop = (numbers) => {
  let total = 0;
  for (let counter = 0; counter <= numbers.length - 1; counter++) {
    total += numbers[counter];
  }
  console.log(total);
};
secondLoop([29, 83, 71, 42, 91, 3, 56, 21, 20, 33]);

const sameThing = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total = total + number;
  }
  console.log(total);
};
sameThing([29, 83, 71, 42, 91, 3, 56, 21, 20, 33]);

//Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

const thirdLoop = (number) => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

thirdLoop(4);
//Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:
const fourLoop = (number) => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};
fourLoop(4);

const fiveLoop = (year, age) => {
  total = year;
  for (let counter = 0; counter <= 10; counter++) {
    total = total + 1;
    console.log(`Naciste en el año ${year}`);
    console.log(`En el año ${total} cumpliste ${}`);
  }
};
fiveLoop(2000, 21);
