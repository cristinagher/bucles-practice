// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
//Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const firstBucle = (number) => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};
firstBucle(4);
