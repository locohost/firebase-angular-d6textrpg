import { Base } from './base';
import { World } from './world';
import { Area } from './area';
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
