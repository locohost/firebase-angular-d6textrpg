import { Base } from './base';
import { Area } from './area';
import { Room } from './room';
import { BuildingType  } from '../enum/all.enum';

export interface Building extends Base {
	type: BuildingType;
	area: Area;
	rooms: Room[];
}
