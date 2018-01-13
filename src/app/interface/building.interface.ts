import { Base } from './base.interface';
import { DropDown } from './area.interface';
import { Room } from './room.interface';
import { BuildingType  } from '../enum/all.enum';

export interface Building extends Base {
	type: BuildingType;
	area: DropDown;
	rooms: Room[];
}
