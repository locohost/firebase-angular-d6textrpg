import { Base } from './base.model';
import { SpellType  } from '../enum/all.enum';
import { Effect } from './effect.model';


export class Spell extends Base {

	type: SpellType;
	soundUrl: string;
	component: {
		verbal: boolean;
		material: boolean;
		somatic: boolean;
	};
	effects: Effect[];

	constructor(data = null) {
		super(data);
		this.type = (data && data.type ? data.type : SpellType.Unknown);
		this.soundUrl = (data && data.soundUrl ? data.soundUrl : '');
		this.component.verbal = (data && data.component && data.component.verbal ? data.component.verbal : true);
		this.component.material = (data && data.component && data.component.material ? data.component.material : false);
		this.component.somatic = (data && data.component && data.component.somatic ? data.component.somatic : false);
		this.effects = (data && data.effects ? data.effects : []);
	}

	static validate(model: Spell): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: Spell): string[] {
		// Add code to create and save here...
		return Spell.validate(model);
	}

	static readById(id: string): Spell {
		const area = new Spell();
		return area;
	}

	static update(model: Spell): string[] {
		// Add code to update and save here...
		return Spell.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const data = super.docify();
		data.type = this.type;
		data.soundUrl = this.soundUrl;
		data.component = this.component;
		data.effects = this.effects;
		return data;
	}

}
