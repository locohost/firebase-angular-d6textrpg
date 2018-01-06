import { Base } from './base.model';
import { Player } from './player.model';
import { Item } from './item.model';
import { Spell } from './spell.model';
import { CharReputation } from '../enum/all.enum';
import { Coins } from './misc.model';

export class Reward extends Base {
	type: RewardType;
	spell: Spell;
	items: Item[];
	coins: Coins;
	knowledge: string;
	experience: number;
	stat: string;
	statIncrease: number;
	repIncrease: number;
	repNew: CharReputation;

	constructor(data = null) {
		super(data);
	}

	static validate(model: Reward): string[] {
		const errors: string[] = [];
		return errors;
	}
	docify(): any {
		const data = super.docify();
		return data;
	}

} // end class Reward

export class RewardMagic extends Reward {
	spell: Spell;

	constructor(data) {
		super(data);
		this.spell = data.spell;
	}

	playerTrigger(reward: RewardMagic, player: Player) {

	}

	docify(): any {
		const doc = super.docify();
		doc.spell = this.spell;
		return doc;
	}

} // end class RewardMagic

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

	docify(): any {
		const doc = super.docify();
		doc.items = this.items;
		doc.coins = this.coins;
		return doc;
	}

} // end class RewardTreasure

export class RewardKnowledge extends Reward {
	knowledge: string;

	constructor(data) {
		super(data);
		this.knowledge = data.knowledge;
	}

	playerTrigger(reward: RewardKnowledge, player: Player) {

	}

	docify(): any {
		const doc = super.docify();
		doc.knowledge = this.knowledge;
		return doc;
	}

} // end class RewardKnowledge

export class RewardExperience extends Reward {
	experience: number;

	constructor(data) {
		super(data);
		this.experience = data.experience;
	}

	static playerTrigger(reward: RewardExperience, player: Player) {

	}

	docify(): any {
		const doc = super.docify();
		doc.experience = this.experience;
		return doc;
	}

} // end class RewardExperience

export class RewardStats extends Reward {
	stat: string;
	statIncrease: number;

	constructor(data) {
		super(data);
		this.stat = data.stat;
		this.statIncrease = data.statIncrease;
	}

	static playerTrigger(reward: RewardStats, player: Player) {

	}

	docify(): any {
		const doc = super.docify();
		doc.stat = this.stat;
		doc.statIncrease = this.statIncrease;
		return doc;
	}

} // end class RewardStats

export class RewardReputation extends Reward {
	repIncrease: number;
	repNew: CharReputation;

	constructor(data) {
		super(data);
		this.repIncrease = (data.repIncrease || -1);
		this.repNew = (data.repNew || CharReputation.Unknown);
	}

	static playerTrigger(reward: RewardReputation, player: Player) {

	}

	docify(): any {
		const doc = super.docify();
		doc.repIncrease = this.repIncrease;
		doc.repNew = this.repNew;
		return doc;
	}

} // end class RewardReputation
