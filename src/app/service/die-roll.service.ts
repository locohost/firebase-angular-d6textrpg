import { Injectable } from '@angular/core';
import { DieRoll } from '../interface/die-roll.interface';

@Injectable()
export class DieRollService {
	value: number;

	constructor() { }

	roll(dieRoll: DieRoll): number {
		this.value = 0;
		for (let i = 0; i < dieRoll.howMany; i++) {
			this.value += ((Math.random() * dieRoll.die) + 1) + dieRoll.plusMinus;
		}
		return this.value;
	}

}

// @Injectable()
// export class DieRollService {
// 	value: number;

// 	constructor() { }

// 	roll(die: number, howMany: number, plusMinus: number): number {
// 		this.value = 0;
// 		for (let i = 0; i < howMany; i++) {
// 			this.value += ((Math.random() * die) + 1) + plusMinus;
// 		}
// 		return this.value;
// 	}

// }

// @Injectable()
// export class DieRollService {
// 	dieRoll: DieRoll;

// 	constructor(dieRoll: DieRoll) {
// 		this.dieRoll = dieRoll;
// 	}

// 	roll(): number {
// 		this.dieRoll.value = 0;
// 		for (let i = 0; i < this.dieRoll.howMany; i++) {
// 			this.dieRoll.value += ((Math.random() * this.dieRoll.die) + 1) + this.dieRoll.plusMinus;
// 		}
// 		return this.dieRoll.value;
// 	}


// }
