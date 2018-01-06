import { Region } from './region.interface';
import { CharReputation } from '../enum/all.enum';

export interface CharRepRegion {
	region: Region;
	rep: CharReputation;
}
