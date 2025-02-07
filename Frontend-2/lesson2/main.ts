// interface Pessoa {
// 	idade: number;
// 	nome: string;
// }

// const user: Pessoa = {nome: 'João', idade: 30};


type NumberRange<Min extends number, Max extends number> = number & {
  readonly __brand: unique symbol;
};

function validateAge(age: number): age is NumberRange<2, 100> {
  return age > 2 && age < 100;
}

interface Pessoa {
  idade: NumberRange<2, 100>;
  nome: string;
}

// Usage example:
function createPessoa(nome: string, idade: number): Pessoa {
  if (!validateAge(idade)) {
    throw new Error('Age must be between 2 and 100');
  }
  return { nome, idade } as Pessoa;
}

const usuario = createPessoa('João', 30); // OK
// const invalid = createPessoa('Maria', 150); // Runtime error