import { Building } from './building';
import { CharReputation } from '../enum/all.enum';

export interface CharRepBuilding {
	building: Building;
	rep: CharReputation;
}
