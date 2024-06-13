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

//Crea una función que reciba el año actual y tu edad, la función debe imprimir:

const fiveLoop = (year, age) => {
  console.log(`Naciste en el año ${year - age}`);
  for (let counter = 1; counter <= age; counter++) {
    if (year - age + counter === year - age + 1) {
      console.log(`En el año ${year - age + counter} cumpliste ${counter} año`);
    } else {
      console.log(
        `En el año ${year - age + counter} cumpliste ${counter} años`
      );
    }
  }
};
fiveLoop(2024, 24);

//Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const sixLoop = (x, y) => {
  for (let counter = x; counter <= y; counter++) {
    if (counter % 2 === 0 && counter < y) {
      console.log(counter);
    }
  }
};
sixLoop(2, 7);

//Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays

// const sevenLoop = () => {
//   const firstArray = [];
//   const secondArray = [];
//   for (let counter = 0; counter < 5; counter++) {
//     const randomNumberA = Math.floor(Math.random() * 11);
//     const randomNumberB = Math.floor(Math.random() * 11);
//     firstArray.push(randomNumberA);
//     secondArray.push(randomNumberB);
//   }
//   console.log(firstArray);
//   console.log(secondArray);
//   for (let counter = 0; counter < 5; counter++) {
//     if (firstArray.includes(secondArray[counter])) {
//       console.log(`Se repite el número ${secondArray[counter]}´);
//     }
//   }
// }

// sevenLoop();

//Imprima los indices de posicion del array para los numeros mayores de 5
let numeros = [1, 6, 91, 2, 33, 13, 10, 4, 5, 23, 8, 2];

function imprimirNumerosAltos(array) {
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element > 5 && element <= 10) {
      console.log(element);
    }
    // return coleccion
  }
}
imprimirNumerosAltos(numeros);

const fraseLorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officia nemo dolores earum placeat corrupti hic, alias perferendis ducimus animi dolore modi temporibus laboriosam recusandae laborum quis molestias molestiae eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque, neque necessitatibus harum, labore, unde corrupti corporis aliquam fugiat adipisci aliquid fugit incidunt dolor ad eos! Repellendus repudiandae maxime neque. Adipisci possimus maiores ducimus, voluptates, corporis dolorem quo modi, perferendis tempora nobis qui! Dignissimos possimus, doloremque corrupti provident temporibus molestias adipisci maxime illum numquam fugit hic officiis, quisquam quam beatae. Nam animi impedit, itaque aut, eligendi iste earum cumque ipsum magnam minima quo fuga! Ipsa numquam ullam deserunt velit, sunt tenetur laboriosam repellendus sapiente impedit neque deleniti? Dolores, alias blanditiis.";
const palabras = fraseLorem.split(" ");

for (let palabra of palabras) {
  if (palabra.includes("e")) {
    console.log(palabra);
  }
}

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

const objeto = {
  prop: "valor1",
  propiedad: "valor2",
  caracteristica: "valor3",
  algomas: "valor4",
  otraPropiedadMasLarga: "valor5",
  sol: "valor6",
  nombreLargoPropiedad: "valor7",
};

for (let key in objeto) {
  if (key.length > 9) {
    console.log(key);
  }
}
