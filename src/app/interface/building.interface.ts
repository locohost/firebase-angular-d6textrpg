import { Base } from './base.interface';
import { Area } from './area.interface';
import { Room } from './room.interface';
import { BuildingType  } from '../enum/all.enum';

export interface Building extends Base {
	type: BuildingType;
	area: Area;
	rooms: Room[];
}
