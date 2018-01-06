import { Base } from './base';
import { Item } from './item';
import { Effect } from './effect';
import { HazardType } from '../enum/all.enum';

export interface Hazard extends Base {
	type: HazardType;
	effects: Effect[];
	preventiveItems: Item[];
	preventiveEffects: Effect[];
	limitingItems: Item[];
	limitingEffects: Effect[];
}
