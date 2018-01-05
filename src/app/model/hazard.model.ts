import { Base } from './base.model';
import { HazardType } from '../enum/all.enum';
import { Item } from './item.model';
import { Effect } from './effect.model';
import { Player } from './player.model';

export class Hazard extends Base {
	/**
		type Hazard implements BaseType {
			type: HazardType
		}
	*/

	type: HazardType;
	effects: Effect[];
	preventiveItems: Item[];
	preventiveEffects: Effect[];
	limitingItems: Item[];
	limitingEffects: Effect[];

	constructor(data = null) {
		super(data);
		this.type = (data && data.type ? data.type : HazardType.Unknown);
		this.effects = (data && data.effects ? data.effects : []);
	}

	static validate(model: Hazard): string[] {
		const errors: string[] = [];
		return errors;
	}

	static playerTrigger(hazard: Hazard, player: Player) {
		hazard.effects.forEach(effect => {
			// TODO: Check if player has preventive/limiting Items or effects before applying...
			Effect.applyToPlayer(effect, player);
		});
	}

	static create(model: Hazard): string[] {
		// Add code to create and save here...
		return Hazard.validate(model);
	}

	static readById(id: string): Hazard {
		const hazard = new Hazard();
		return hazard;
	}

	static update(model: Hazard): string[] {
		// Add code to update and save here...
		return Hazard.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const data = super.docify();
		data.type = this.type;
		return data;
	}

}
