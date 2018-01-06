import { Base } from './base.model';
import { Module } from './module.model';
import { Reward } from './reward.model';
import { ModuleGoalType } from '../enum/all.enum';

export class ModuleGoal extends Base {
	type: ModuleGoalType;
	module: Module;
	rewards: Reward[];

	constructor(data) {
		super(data);
	}

	static validate(model: ModuleGoal): string[] {
		const errors: string[] = [];
		return errors;
	}

	docify(): any {
		const rewards: string[] = [];
		this.rewards.forEach(reward => {
			rewards.push(reward.docify());
		});
		const doc = super.docify();
		doc.type = this.type;
		doc.moduleUID = (!!this.module ? this.module.uid : '');
		doc.moduleName = (!!this.module ? this.module.name : '');
		doc.rewards = rewards;
		return doc;
	}

} // end class ModuleGoal
