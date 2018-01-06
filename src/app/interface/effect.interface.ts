import { Base } from './base.interface';
import { Spell } from './spell.interface';
import { DieRoll } from './die-roll.interface';
import { EffectType, Facing } from '../enum/all.enum';

export interface Effect extends Base {
	type: EffectType;
	soundUrl: string;
	stat: string;
	// Omit value to use die roll
	// die can only be 4, 6, 8, 10, 12, 20
	// If value is set, you can omit all die properties
	// Range and Radius are node counts
	value: number;
	valueRoll: DieRoll;
	radius: number;
	radiusRoll: DieRoll;
	direction: {
		facing: Facing,
		facingRoll: DieRoll,
		range: number,
		rangeRoll: DieRoll
	};
	duration: number;
	durationRoll: DieRoll;
	cures: Spell[];
}
