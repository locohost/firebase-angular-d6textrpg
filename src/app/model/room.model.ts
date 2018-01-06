import { Base } from './base.model';
import { Node } from './node.model';

export class Room extends Base {
	nodes: Node[];
	entrySoundUrl: string;
	backgroundSoundUrl: string;
	atmosphere: {
		smell: string;
		lighting: string;
		temperature: string;
	};

	constructor(data) {
		super(data);
		this.nodes = (data.nodes || []);
		this.entrySoundUrl = (data.entrySoundUrl || '');
		this.backgroundSoundUrl = (data.backgroundSoundUrl || '');
		this.atmosphere.smell = (data.atmosphere && data.atmosphere.smell || '');
		this.atmosphere.lighting = (data.atmosphere && data.atmosphere.lighting || '');
		this.atmosphere.temperature = (data.atmosphere && data.atmosphere.temperature || '');
	}

	docify(): any {
		const nodes: string[] = [];
		this.nodes.forEach(n => {
			nodes.push(n.docify());
		});
		const doc = super.docify();
		doc.nodes = nodes;
		doc.entrySoundUrl = this.entrySoundUrl;
		doc.backgroundSoundUrl = this.backgroundSoundUrl;
		doc.atmosphere = {
			smell: this.atmosphere.smell,
			lighting: this.atmosphere.lighting,
			temperature: this.atmosphere.temperature
		};
		return doc;
	}

}
