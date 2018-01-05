import { Base } from './base.model';
import { Reward } from './reward.model';
import { Hazard } from './hazard.model';
import { NodeType } from '../enum/all.enum';

export class Node extends Base {

	type: NodeType;
	appearance: {
		north: {
			imageUrl: string,
			description: string,
		},
		east: {
			imageUrl: string,
			description: string,
		},
		south: {
			imageUrl: string,
			description: string,
		},
		west: {
			imageUrl: string,
			description: string,
		},
		up: {
			imageUrl: string,
			description: string,
		},
		down: {
			imageUrl: string,
			description: string,
		}
	};
	coverIdx: number;
	howManyFit: number;
	rewards: Reward[];
	hazards: Hazard[];

	constructor(data = null) {
		super(data);
		this.type = (data && data.type ? data.type : NodeType.Unknown);
		this.appearance.north.imageUrl =
			(data && data.appearance && data.appearance.north && data.appearance.north.imageUrl
				? data.appearance.north.imageUrl : '');
		this.appearance.north.description =
			(data && data.appearance && data.appearance.north && data.appearance.north.description
				? data.appearance.north.description : '');

		this.appearance.east.imageUrl =
		(data && data.appearance && data.appearance.east && data.appearance.east.imageUrl
			? data.appearance.east.imageUrl : '');
		this.appearance.east.description =
			(data && data.appearance && data.appearance.east && data.appearance.east.description
				? data.appearance.east.description : '');

		this.appearance.south.imageUrl =
			(data && data.appearance && data.appearance.south && data.appearance.south.imageUrl
				? data.appearance.south.imageUrl : '');
		this.appearance.south.description =
			(data && data.appearance && data.appearance.south && data.appearance.south.description
				? data.appearance.south.description : '');

		this.appearance.west.imageUrl =
			(data && data.appearance && data.appearance.west && data.appearance.west.imageUrl
				? data.appearance.west.imageUrl : '');
		this.appearance.west.description =
			(data && data.appearance && data.appearance.west && data.appearance.west.description
				? data.appearance.west.description : '');

		this.appearance.up.imageUrl =
			(data && data.appearance && data.appearance.up && data.appearance.up.imageUrl
				? data.appearance.up.imageUrl : '');
		this.appearance.up.description =
			(data && data.appearance && data.appearance.up && data.appearance.up.description
				? data.appearance.up.description : '');

		this.appearance.down.imageUrl =
			(data && data.appearance && data.appearance.down && data.appearance.down.imageUrl
				? data.appearance.down.imageUrl : '');
		this.appearance.down.description =
			(data && data.appearance && data.appearance.down && data.appearance.down.description
				? data.appearance.down.description : '');

		this.coverIdx = (data && data.coverIdx ? data.coverIdx : 0);
		this.howManyFit = (data && data.howManyFit ? data.howManyFit : 1);
		this.rewards = (data && data.rewards ? data.rewards : []);
		this.hazards = (data && data.hazards ? data.hazards : []);
	}

	static validate(model: Node): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: Node): string[] {
		// Add code to create and save here...
		return Node.validate(model);
	}

	static readById(id: string): Node {
		const node = new Node();
		return node;
	}

	static update(model: Node): string[] {
		// Add code to update and save here...
		return Node.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const data = super.docify();
		data.type = this.type;
		data.appearance = this.appearance;
		data.coverIdx = this.coverIdx;
		data.howManyFit = this.howManyFit;
		data.rewards = this.rewards;
		data.hazards = this.hazards;
		return data;
	}

}

