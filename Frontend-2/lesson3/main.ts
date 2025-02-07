// Criar classe Veiculo com atributos marca, modelo e ano. Criar uma classe Carro que herda de Veiculo e adiciona propriedade portas. 

class Veiculo {
	marca: string;
	modelo: string;
	ano: number;
	constructor(marca: string, modelo: string, ano: number){
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
	}
	description(){
		return `Veiculo: ${this.marca} ${this.modelo} ${this.ano}`;
	}
}

class Carro extends Veiculo {
	portas: number;
	constructor(marca: string, modelo: string, ano: number, portas: number){
		super(marca, modelo, ano);
		this.portas = portas;
	}
	description(){
		return `${super.description()} - Portas: ${this.portas}`;
	}
	
}

const carro = new Carro('Fiat', 'Uno', 2010, 4);

console.log(carro.description()); // Veiculo: Fiat Uno 2010 - Portas: 4