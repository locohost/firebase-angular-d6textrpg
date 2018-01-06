import { Base } from './base.interface';
import { NodeReward } from './node-reward.interface';
import { NodeHazard } from './node-hazard.interface';
import { NodeType } from '../enum/all.enum';

export interface Node extends Base {
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
}
