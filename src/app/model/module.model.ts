import { Base } from './base.model';
import { World } from './world.model';
import { Player } from './player.model';
import { ModuleGoal } from './module-goal.model';
import { ModuleType } from '../enum/all.enum';

export class Module extends Base {
	type: ModuleType;
	world: World;
	author: Player;
	rating: number;
	minLevel: number;
	maxLevel: number;
	goals: ModuleGoal[];

	constructor(data) {
		super(data);
	}

	static validate(model: Module): string[] {
		const errors: string[] = [];
		return errors;
	}

	docify(): any {
		const goals: string[] = [];
		this.goals.forEach(goal => {
			goals.push(goal.docify());
		});
		const doc = super.docify();
		doc.type = this.type;
		doc.authorUID = (!!this.author ? this.author.uid : '');
		doc.authorName = (!!this.author ? this.author.name : '');
		doc.worldUID = (!!this.world ? this.world.uid : '');
		doc.worldName = (!!this.world ? this.world.name : '');
		doc.rating = this.rating;
		doc.minLevel = this.minLevel;
		doc.maxLevel = this.maxLevel;
		doc.goals = goals;
		return doc;
	}

} // end class Module
