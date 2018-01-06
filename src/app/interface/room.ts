import { Base } from './base';
import { Node } from './node';

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
