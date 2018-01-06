import { Base } from './base.interface';
import { Region } from './region.interface';
import { WorldType } from '../enum/all.enum';

export interface World extends Base {
	type: WorldType;
	regions: Region[];
}
