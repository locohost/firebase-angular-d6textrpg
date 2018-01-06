import { Base } from './base';
import { Effect } from './effect';
import { SpellType } from '../enum/all.enum';

export interface Spell extends Base {
	type: SpellType;
	soundUrl: string;
	component: {
		verbal: boolean;
		material: boolean;
		somatic: boolean;
	};
	effects: Effect[];
}
