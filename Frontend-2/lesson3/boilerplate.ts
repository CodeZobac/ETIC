type product = {
	id: number;
	name: string;
	price: number;
}


class CreateProduct implements product {
	id: number;
	name: string;
	price: number;
	constructor(id: number, name: string, price: number){
		this.id = id;
		this.name = name;
		this.price = price;
	}

	readProduct(){
		console.log(`Product: ${this.name}, Price: ${this.price}`);
	}
}
