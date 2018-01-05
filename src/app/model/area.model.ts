import { Base } from './base.model';
import { Building } from './building.model';
import { Region } from './region.model';
import { AreaType  } from '../enum/all.enum';

export class Area extends Base {

	buildings: Building[];
	region: Region;
	type: AreaType;
	coverIdx: number;
	elevation: number;

	constructor(data = null) {
		super(data);
		this.buildings = (data && data.buildings ? data.buildings : []);
		this.region = (data && data.region ? data.region : null);
		this.type = (data && data.type ? data.type : AreaType.Unknown);
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
		const data = super.docify();
		data.buildings = this.buildings;
		data.region = this.region;
		data.coverIdx = this.coverIdx;
		data.elevation = this.elevation;
		return data;
	}

}

