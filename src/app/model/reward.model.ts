import { Base } from './base.model';
import { Player } from './player.model';
import { Item } from './item.model';
import { Spell } from './spell.model';
import { CharReputation } from '../enum/all.enum';
import { Coins } from './misc.model';

export class Reward extends Base {

	constructor(data = null) {
		super(data);
	}

	static validate(model: Reward): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: Reward): string[] {
		// Add code to create and save here...
		return Reward.validate(model);
	}

	static readById(id: string): Reward {
		const reward = new Reward();
		return reward;
	}

	static update(model: Reward): string[] {
		// Add code to update and save here...
		return Reward.validate(model);
	}

	static delete(id: string) {
		// Add code to mark deleted here...
	}

	docify(): any {
		const data = super.docify();
		return data;
	}

}

export class RewardMagic extends Reward {
	spell: Spell;

	constructor(data) {
		super(data);
		this.spell = data.spell;
	}

	playerTrigger(reward: RewardMagic, player: Player) {

	}

	docify() {
		const data = super.docify();
		data.spell = this.spell;
		return data;
	}
}

export class RewardTreasure extends Reward {
	items: Item[];
	coins: Coins;

	constructor(data) {
		super(data);
		this.items = (data.items ? data.items : []);
		this.coins = (data.coins ? data.coins : []);
	}

	playerTrigger(reward: RewardTreasure, player: Player) {

	}

	docify() {
		const data = super.docify();
		data.items = this.items;
		data.coins = this.coins;
		return data;
	}
}

export class RewardKnowledge extends Reward {
	knowledge: string;

	constructor(data) {
		super(data);
		this.knowledge = data.knowledge;
	}

	playerTrigger(reward: RewardKnowledge, player: Player) {

	}

	docify() {
		const data = super.docify();
		data.knowledge = this.knowledge;
		return data;
	}
}

export class RewardExperience extends Reward {
	experience: number;

	constructor(data) {
		super(data);
		this.experience = data.experience;
	}

	static playerTrigger(reward: RewardExperience, player: Player) {

	}

	docify() {
		const data = super.docify();
		data.experience = this.experience;
		return data;
	}
}

export class RewardStats extends Reward {
	stat: string;
	statIncrease: number;

	constructor(data) {
		super(data);
	}

	static playerTrigger(reward: RewardStats, player: Player) {

	}

	docify() {
		const data = super.docify();
		data.stat = this.stat;
		data.statIncrease = this.statIncrease;
		return data;
	}
}

export class RewardReputation extends Reward {
	repIncrease: number;
	repNew: CharReputation;

	constructor(data) {
		super(data);
	}

	static playerTrigger(reward: RewardReputation, player: Player) {

	}

	docify() {
		const data = super.docify();
		data.repIncrease = this.repIncrease;
		data.repNew = this.repNew;
		return data;
	}
}
