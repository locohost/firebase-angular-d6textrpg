import { Building } from './building.interface';
import { CharReputation } from '../enum/all.enum';

export interface CharRepBuilding {
	building: Building;
	rep: CharReputation;
}
