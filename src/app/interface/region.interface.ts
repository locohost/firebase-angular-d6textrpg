import { Base } from './base.interface';
import { World } from './world.interface';
import { DropDown } from './area.interface';
import { RegionType } from '../enum/all.enum';

export interface Region extends Base {
	type: RegionType;
	world: World;
	areas: DropDown[];
	inhabitants: string;
	economy: string;
	climate: string;
	religion: string;
}
