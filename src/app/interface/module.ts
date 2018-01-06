import { Base } from './base';
import { World } from './world';
import { Player } from './player';
import { ModuleGoal } from './module-goal';
import { ModuleType } from '../enum/all.enum';

export interface Module extends Base {
	type: ModuleType;
	world: World;
	author: Player;
	rating: number;
	minLevel: number;
	maxLevel: number;
	goals: ModuleGoal[];
}
