import { Base } from './base.interface';
import { Node } from './node.interface';

export interface Room extends Base {
	nodes: Node[];
	entrySoundUrl: string;
	backgroundSoundUrl: string;
	atmosphere: {
		smell: string;
		lighting: string;
		temperature: string;
	};
}
