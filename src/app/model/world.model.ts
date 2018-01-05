import { Base } from './base.model';
import { WorldType } from '../enum/all.enum';
import { Region } from './region.model';

export class World extends Base {
	type: WorldType;
	regions: Region[];

	constructor(data) {
		super(data);
		this.type = (data.type || WorldType.Unknown);
		this.regions = (data.regions || []);
	}

	static validate(model: World): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: World): string[] {
		// Add code to create and save here...
		return World.validate(model);
	}

	static readById(id: string): World {
		const world = new World({});
		return world;
	}

	static update(model: World): string[] {
		// Add code to update and save here...
		return World.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const regions: string[] = [];
		this.regions.forEach(region => {
			regions.push(region.docify());
		});
		const doc = super.docify();
		doc.type = this.type;
		doc.regions = regions;
		return doc;
	}
}
