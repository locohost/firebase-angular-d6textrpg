import { Base } from './base.interface';
import { Effect } from './effect.interface';
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
