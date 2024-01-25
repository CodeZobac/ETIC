// window.onload = () => {
//   console.log("dentro onload");
// };

// console.log("fora onload");

// const soma = (a, b) => {
//   return a + b;
// };
// somar = soma(10, 120);
// console.log(soma);

// const dois = (c, d) => {
//   return c * d;
// };

// mult = dois(soma, 2);
// console.log(mult);

const arr = [2, 45, 34, 2];

const media = (array) => {
  array.forEach((element) => {
    soma += element;
    indice = array.length();
    media = soma / indice;
    return media;
  });
};

console.log(media(arr));
