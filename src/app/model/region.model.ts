import { Base } from './base.model';
import { World } from './world.model';
import { Area } from './area.model';
import { RegionType } from '../enum/all.enum';

export class Region extends Base {
	type: RegionType;
	world: World;
	areas: Area[];
	inhabitants: string;
	economy: string;
	climate: string;
	religion: string;

	constructor(data) {
		super(data);
		this.type = (data.type || RegionType.Unknown);
		this.world = (data.world || null);
		this.areas = (data.areas || []);
		this.inhabitants = (data.inhabitants || '');
		this.economy = (data.economy || '');
		this.climate = (data.climate || '');
		this.religion = (data.religion || '');
	}

	static validate(model: Region): string[] {
		const errors: string[] = [];
		return errors;
	}

	docify(): any {
		const areas: string[] = [];
		this.areas.forEach(area => {
			areas.push(area.docify());
		});
		const doc = super.docify();
		doc.type = this.type;
		doc.worldUID = (!!this.world ? this.world.uid : '');
		doc.worldName = (!!this.world ? this.world.name : '');
		doc.areas = areas;
		doc.inhabitants = this.inhabitants;
		doc.economy = this.economy;
		doc.climate = this.climate;
		doc.religion = this.religion;
		return doc;
	}

} // end class region.model

