class Ship {
	#type;
	#length;
	#hits = 0;

	constructor(type) {
		this.#type = type;
		this.#length = ShipTypes.find(ship => ship.type === this.type).length;
	}

	get type() {
		return this.#type;
	}

	get length() {
		return this.#length;
	}

	hit() {
		if (this.#hits < this.length)
			this.#hits += 1;
	}

	get hits() {
		return this.#hits;
	}

	isSunk() {
		return this.#hits < this.#length ? false : true;
	}
}

const ShipTypes = [
	{
		'type' : 'destroyer',
		'length' : 2
	},
	{
		'type' : 'cruiser',
		'length' : 3
	},
	{
		'type' : 'submarine',
		'length' : 3
	},
	{
		'type' : 'battleship',
		'length' : 4
	},
	{
		'type' : 'carrier',
		'length' : 5
	},
];
	
module.exports = {
	Ship,
	ShipTypes
}
