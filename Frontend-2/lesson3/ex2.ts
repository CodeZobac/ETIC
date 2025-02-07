// Criar um type player que tenha os atributos name, age e game.
// Criar 4 diferentes tipos de inicialização e um objeto jogador do tipo player.
// Com partial, readonly, pick e omit.

type Player = {
	name: string;
	age: number;
	game: string;
}

// partial
const player1: Partial<Player> = {
	name: 'João',
}

// readonly
const player2: Readonly<Player> = {
	name: 'João',
	age: 20,
	game: 'Fifa'
}

// pick
const player3: Pick<Player, 'name' | 'age'> = {
	name: 'João',
	age: 20
}

// omit
const player4: Omit<Player, 'game'> = {
	name: 'João',
	age: 20
}

const player: Player = {
	name: 'João',
	age: 20,
	game: 'Fifa'
}



