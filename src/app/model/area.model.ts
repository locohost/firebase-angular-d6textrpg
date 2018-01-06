import { Base } from './base.model';
import { Building } from './building.model';
import { Node } from './node.model';
import { Region } from './region.model';
import { AreaType  } from '../enum/all.enum';

export class Area extends Base {
	type: AreaType;
	region: Region;
	buildings: Building[];
	nodes: Node[];
	coverIdx: number;
	elevation: number;

	constructor(data) {
		super(data);
		this.type = (data.type || AreaType.Unknown);
		this.region = (data.region || null);
		this.buildings = (data.buildings || []);
		this.nodes = (data.nodes || []);
		this.coverIdx = (data.coverIdx || 0);
		this.elevation = (data.elevation || 0);
	}

	static validate(model: Area): string[] {
		const errors: string[] = [];
		return errors;
	}

	docify(): any {
		const nodes: string[] = [];
		this.nodes.forEach(node => {
			nodes.push(node.docify());
		});
		const buildings: string[] = [];
		this.buildings.forEach(building => {
			buildings.push(building.docify());
		});
		const doc = super.docify();
		doc.type = this.type;
		doc.regionUID = (!!this.region ? this.region.uid : '');
		doc.regionName = (!!this.region ? this.region.name : '');
		doc.buildings = buildings;
		doc.nodes = nodes;
		doc.coverIdx = this.coverIdx;
		doc.elevation = this.elevation;
		return doc;
	}

}

