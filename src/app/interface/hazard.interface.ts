import { Base } from './base.interface';
import { Item } from './item.interface';
import { Effect } from './effect.interface';
import { HazardType } from '../enum/all.enum';

export interface Hazard extends Base {
	type: HazardType;
	effects: Effect[];
	preventiveItems: Item[];
	preventiveEffects: Effect[];
	limitingItems: Item[];
	limitingEffects: Effect[];
}
