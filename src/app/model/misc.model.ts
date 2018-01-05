export class DieRoll {

	value: number;
	die: number; // die should normally be 4, 6, 8, 10, 12 or 20
	howMany: number;
	plusMinus: number;

	constructor(data) {
		this.die = data.die;
		this.howMany = data.howMany;
		this.plusMinus = data.plusMinus;
	}

	roll(): number {
		this.value = 0;
		for (let i = 0; i < this.howMany; i++) {
			this.value += ((Math.random() * this.die) + 1) + this.plusMinus;
		}
		return this.value;
	}
}

export class Coins {

	gold: number;
	silver: number;
	copper: number;

	constructor(data = null) {
		this.gold = (data && data.gold ? data.gold : 0);
		this.silver = (data && data.silver ? data.silver : 0);
		this.copper = (data && data.copper ? data.copper : 0);
	}
}

export class Size {
	l: number;
	w: number;
	h: number;

	constructor(data) {
		this.l = data.l;
		this.w = data.w;
		this.h = data.h;
	}
}
