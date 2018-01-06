import { Base } from './base.interface';
import { World } from './world.interface';
import { Player } from './player.interface';
import { ModuleGoal } from './module-goal.interface';
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
