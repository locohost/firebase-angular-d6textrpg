import { Base } from './base.model';
import { DieRoll } from './misc.model';
import { Spell } from './spell.model';
import { Player } from './player.model';
import { Item } from './item.model';
import { EffectType, Facing } from '../enum/all.enum';

export class Effect extends Base {

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

	constructor(data = null) {
		super(data);
		// Generic 1d6 die roller, use in null data attribs below
		const roll1d6 = new DieRoll({ die: 6, howMany: 1, plusMinus: 0 });

		this.type = (data && data.type ? data.type : EffectType.Unknown);
		this.soundUrl = (data && data.soundUrl ? data.soundUrl : '');
		this.stat = (data && data.stat ? data.stat : '');
		this.cures = (data && data.cures ? data.cures : 0);

		this.valueRoll = (data && data.valueRoll ? data.valueRoll : roll1d6);
		this.value = (data && data.value ? data.value : this.valueRoll.roll());
		this.radiusRoll = (data && data.radiusRoll ? data.radiusRoll : roll1d6);
		this.radius = (data && data.radius > 0 ? data.radius : this.radiusRoll.roll());
		this.durationRoll = (data && data.durationRoll ? data.durationRoll : roll1d6);
		this.duration = (data && data.duration > 0 ? data.duration : this.durationRoll.roll());

		this.direction.facingRoll = (data && data.direction && data.direction.facingRoll
			? data.direction.facingRoll
			: roll1d6);
		this.direction.facing =	(data && data.direction && data.direction.facing
			? data.direction.facing
			: this.direction.facingRoll.roll());
		this.direction.rangeRoll = (data && data.direction && data.direction.rangeRoll
			? data.direction.rangeRoll
			: roll1d6);
		this.direction.range = (data && data.direction && data.direction.range
			? data.direction.range
			: this.direction.rangeRoll.roll());
	}

	static validate(model: Effect): string[] {
		const errors: string[] = [];
		return errors;
	}

	static applyToPlayer(effect: Effect, player: Player) {
		// TODO: Add code to apply this effect to the player...
	}

	docify(): any {
		const data = super.docify();
		data.type = this.type;
		return data;
	}

}
