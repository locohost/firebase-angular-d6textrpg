import { Base } from './base';
import { Region } from './region';
import { WorldType } from '../enum/all.enum';

export interface World extends Base {
	type: WorldType;
	regions: Region[];
}
