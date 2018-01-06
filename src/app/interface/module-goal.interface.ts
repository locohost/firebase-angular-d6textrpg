import { Base } from './base.interface';
import { Module } from './module.interface';
import { Reward } from './reward.interface';
import { ModuleGoalType } from '../enum/all.enum';

export interface ModuleGoal extends Base {
	type: ModuleGoalType;
	module: Module;
	rewards: Reward[];
}
