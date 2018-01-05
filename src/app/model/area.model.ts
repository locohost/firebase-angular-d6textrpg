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

	constructor(data = null) {
		super(data);
		this.type = (data && data.type ? data.type : AreaType.Unknown);
		this.region = (data && data.region ? data.region : null);
		this.buildings = (data && data.buildings ? data.buildings : []);
		this.nodes = (data && data.nodes ? data.nodes : []);
		this.coverIdx = (data && data.coverIdx ? data.coverIdx : 0);
		this.elevation = (data && data.elevation ? data.elevation : 0);
	}

	static validate(model: Area): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: Area): string[] {
		// Add code to create and save here...
		return Area.validate(model);
	}

	static readById(id: string): Area {
		const area = new Area();
		return area;
	}

	static update(model: Area): string[] {
		// Add code to update and save here...
		return Area.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
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

