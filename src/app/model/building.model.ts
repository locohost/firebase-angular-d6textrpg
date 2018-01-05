import { Base } from './base.model';
import { Area } from './area.model';
import { Room } from './room.model';
import { BuildingType  } from '../enum/all.enum';

export class Building extends Base {

	type: BuildingType;
	area: Area;
	rooms: Room[];

	constructor(data = null) {
		super(data);
		this.area = (data && data.area ? data.area : null);
		this.rooms = (data && data.rooms ? data.rooms : null);
		this.type = (data && data.type ? data.type : BuildingType.Unknown);
	}

	static validate(model: Building): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: Building): string[] {
		// Add code to create and save here...
		return Building.validate(model);
	}

	static readById(id: string): Building {
		const building = new Building();
		return building;
	}

	static update(model: Building): string[] {
		// Add code to update and save here...
		return Building.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const rooms: string[] = [];
		this.rooms.forEach(room => {
			rooms.push(room.docify());
		});
		const data = super.docify();
		data.areaUID = this.area.uid;
		data.areaName = this.area.name;
		data.rooms = rooms;
		data.type = this.type;
		return data;
	}

}

