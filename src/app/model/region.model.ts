import { Base } from './base.model';

export class Region extends Base {
	uid: string;
	handle: string;
	email: string;
	photoURL: string;

	constructor(data = null) {
		super(data);
	}

	static validate(model: Region): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: Region): string[] {
		// Add code to create and save here...
		return Region.validate(model);
	}

	static readById(id: string): Region {
		const region = new Region();
		return region;
	}

	static update(model: Region): string[] {
		// Add code to update and save here...
		return Region.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const data = super.docify();
		return data;
	}

}
