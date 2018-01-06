import { Base } from './base';
import { Module } from './module';
import { Reward } from './reward';
import { ModuleGoalType } from '../enum/all.enum';

export interface ModuleGoal extends Base {
	type: ModuleGoalType;
	module: Module;
	rewards: Reward[];
}
