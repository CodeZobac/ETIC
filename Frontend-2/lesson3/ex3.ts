// Criar uma classe ListHandler com T genérico que permita adicionar e remover elementos de um array. A classe deve conter o método add(), remove() e getAll().
//Inicializar o ListHandler e utlilizar todos os métodos, e no final fazer console.log do getAll().

type ListHandler<T> = {
	add: (item: T) => void;
	remove: (item: T) => void;
	getAll: () => T[];
}

class List<T> implements ListHandler<T>{
	private list: T[] = [];
	add(item: T){
		this.list.push(item);
	}
	remove(item: T){
		this.list = this.list.filter(i => i !== item);
	}
	getAll(){
		return this.list;
	}
}

const list = new List<number>();
list.add(1);
list.add(2);
list.add(3);
list.remove(2);
console.log(list.getAll()); // [1, 3]