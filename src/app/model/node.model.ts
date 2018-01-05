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
		this.appearance = (data && data.appearance ? data.appearance : {});
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

