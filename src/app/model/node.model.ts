import { Base } from './base.model';
import { Reward } from './reward.model';
import { Hazard } from './hazard.model';
import { NodeType } from '../enum/all.enum';

export class NodeRewardHazardBase {
	triggerWords: string[];
	triggerDescription: string;
	triggerSoundUrl: string;

	constructor(data) {
		this.triggerWords = (data.triggerWords || []);
		this.triggerDescription = (data.triggerDescription || '');
		this.triggerSoundUrl = (data.triggerSoundUrl || '');
	}

	docify(): any {
		return {
			triggerWords: this.triggerWords,
			triggerDescription: this.triggerDescription,
			triggerSoundUrl: this.triggerSoundUrl
		};
	}

} // end class NodeRewardHazardBase

export class NodeReward extends NodeRewardHazardBase {
	reward: Reward;

	constructor(data) {
		super(data);
		this.reward = (data.reward || null);
	}

	docify(): any {
		const doc = super.docify();
		doc.rewardUID = (!!this.reward ? this.reward.uid : '');
		doc.rewardName = (!!this.reward ? this.reward.name : '');
		return doc;
	}

} // end class NodeReward

export class NodeHazard extends NodeRewardHazardBase {
	hazard: Hazard;

	constructor(data) {
		super(data);
		this.hazard = (data.hazard || null);
	}

	docify(): any {
		const doc = super.docify();
		doc.hazardUID = (!!this.hazard ? this.hazard.uid : '');
		doc.hazardName = (!!this.hazard ? this.hazard.name : '');
		return doc;
	}

} // end class NodeHazard

export class Node extends Base {
	type: NodeType;
	looking: {
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
	rewards: NodeReward[];
	hazards: NodeHazard[];

	constructor(data = null) {
		super(data);
		this.type = (data && data.type ? data.type : NodeType.Unknown);

		this.looking.north.imageUrl =
			(data && data.appearance && data.appearance.north && data.appearance.north.imageUrl
				? data.appearance.north.imageUrl : '');
		this.looking.north.description =
			(data && data.appearance && data.appearance.north && data.appearance.north.description
				? data.appearance.north.description : '');
		this.looking.east.imageUrl =
			(data && data.appearance && data.appearance.east && data.appearance.east.imageUrl
				? data.appearance.east.imageUrl : '');
		this.looking.east.description =
			(data && data.appearance && data.appearance.east && data.appearance.east.description
				? data.appearance.east.description : '');
		this.looking.south.imageUrl =
			(data && data.appearance && data.appearance.south && data.appearance.south.imageUrl
				? data.appearance.south.imageUrl : '');
		this.looking.south.description =
			(data && data.appearance && data.appearance.south && data.appearance.south.description
				? data.appearance.south.description : '');
		this.looking.west.imageUrl =
			(data && data.appearance && data.appearance.west && data.appearance.west.imageUrl
				? data.appearance.west.imageUrl : '');
		this.looking.west.description =
			(data && data.appearance && data.appearance.west && data.appearance.west.description
				? data.appearance.west.description : '');
		this.looking.up.imageUrl =
			(data && data.appearance && data.appearance.up && data.appearance.up.imageUrl
				? data.appearance.up.imageUrl : '');
		this.looking.up.description =
			(data && data.appearance && data.appearance.up && data.appearance.up.description
				? data.appearance.up.description : '');
		this.looking.down.imageUrl =
			(data && data.appearance && data.appearance.down && data.appearance.down.imageUrl
				? data.appearance.down.imageUrl : '');
		this.looking.down.description =
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

	docify(): any {
		const rewards: string[] = [];
		this.rewards.forEach(reward => {
			rewards.push(reward.docify());
		});
		const hazards: string[] = [];
		this.hazards.forEach(hazard => {
			hazards.push(hazard.docify());
		});
		const data = super.docify();
		data.type = this.type;
		data.appearance = this.looking;
		data.coverIdx = this.coverIdx;
		data.howManyFit = this.howManyFit;
		data.rewards = rewards;
		data.hazards = hazards;
		return data;
	}

} // end class Node

