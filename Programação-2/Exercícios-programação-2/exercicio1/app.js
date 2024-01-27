window.onload = () => {
  /**
   * -- Declaração e Manipulação de Variáveis --
   * Declara duas variáveis, (a , b) e atribui-lhes um valor.
   * Troca os valores de a e b sem usar uma variável temporária.
   * Faz console.log dessas 2 variáveis.
   */
  let a = 2;
  let b = 3;
  console.log((a = 10));
  console.log((b = 20));
  /**
   * -- Instruções Condicionais --
   * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
   * O resultado dessa função verifica se o número é par ou ímpar.
   * Faz console.log desse resultado.
   */
  const ehPar = (numero) => {
    if (numero % 2 === 0) {
      console.log(`${numero} é Par`);
    } else {
      console.log(`${numero} não é par`);
    }
  };
  ehPar(120);
  /**
   * -- Arrays --
   * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
   * Itera sobre esse array e faz console.log apenas dos números pares.
   */
  arr = [2, 123, 34, 65, 48];
  const arrPar = (array) => {
    numerosPar = [];
    array.forEach((element) => {
      if (element % 2 === 0) {
        numerosPar.push(element);
      }
    });
    console.log(`Numeros par: ${numerosPar}`);
  };
  arrPar(arr);
  /**
   * -- Funções --
   * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
   * Faz console.log desse resultado.
   */
  const soma = (num1, num2) => {
    return console.log(`Resultado = ${num1 + num2}`);
  };
  soma(20, 10);
  /**
   * -- Objetos --
   * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
   * Faz console.log dessas propriedades.
   */
  class Pessoa {
    nome;
    idade;
    genero;
    constructor(nome, idade, genero) {
      this.nome = nome;
      this.idade = idade;
      this.genero = genero;
    }
    print() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Género: ${this.genero}`);
    }
  }

  const afonso = new Pessoa("Afonso Caboz", "22 Anos", "Masculino");
  afonso.print();
  /**
   * -- Loops --
   * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
   * Faz console.log a cada iteração.
   */
  let A = 1;
  let B = 0;

  const fibonnaci = () => {
    for (let i = 0; i < 10; i++) {
      const temp = A;
      A += B;
      B = temp;
      console.log(A);
    }
  };

  fibonnaci();
  /**
   * -- Manipulação do DOM --
   * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
   * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
   */
  const body = document.querySelector("body");
  const button = document.createElement("button");
  const p = document.createElement("p");
  button.innerText = "Click Me";
  body.appendChild(button);
  body.appendChild(p);
  button.onclick = () => {
    p.innerText += " Button clicked";
  };
  /**
   * -- Async/Await e Fetch --
   * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
   * e transforme o resultado desse fetch em formato json.
   * Faz console.log desse json.
   */
  const loadData = async () => {
    req = await fetch("data.json");
    res = await req.json();
    console.log(res);
  };

  loadData();
};
