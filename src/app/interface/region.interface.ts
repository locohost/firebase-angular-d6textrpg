import { Base } from './base.interface';
import { World } from './world.interface';
import { Area } from './area.interface';
import { RegionType } from '../enum/all.enum';

export interface Region extends Base {
	type: RegionType;
	world: World;
	areas: Area[];
	inhabitants: string;
	economy: string;
	climate: string;
	religion: string;
}
