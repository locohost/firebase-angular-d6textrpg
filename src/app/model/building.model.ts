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
		this.type = (data && data.type ? data.type : BuildingType.Unknown);
		this.area = (data && data.area ? data.area : null);
		this.rooms = (data && data.rooms ? data.rooms : []);
	}

	static validate(model: Building): string[] {
		const errors: string[] = [];
		return errors;
	}

	docify(): any {
		const rooms: string[] = [];
		this.rooms.forEach(room => {
			rooms.push(room.docify());
		});
		const data = super.docify();
		data.type = this.type;
		data.areaUID = (!!this.area ? this.area.uid : '');
		data.areaName = (!!this.area ? this.area.name : '');
		data.rooms = rooms;
		return data;
	}

}

