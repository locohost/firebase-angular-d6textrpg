import { Base } from './base.model';
import { ItemType, Encumberance } from '../enum/all.enum';
import { Coins, Size } from './misc.model';


export class Item extends Base {

	type: ItemType;
	value: Coins;
	size: Size;
	encumberance: Encumberance;
	weight: {
		pounds: number,
		ounces: number
	};
	unique: boolean;
	condition: string;
	customizations: string;
	customizationsValue: Coins;
	isContainer: boolean;
	contains: Item[];

	constructor(data = null) {
		super(data);

		this.type = (data && data.type ? data.type : ItemType.Unknown);
		this.value = (data && data.value ? data.value : new Coins({ gold: 0, silver: 1, copper: 0 }));
		this.size = (data && data.size ? data.size : new Size({ l: 1, w: 1, h: 1 }));
		this.encumberance = (data && data.encumberance ? data.encumberance : Encumberance.None);
		this.weight.pounds = (data && data.weight && data.weight.pounds ? data.weight.pounds : 0);
		this.weight.ounces = (data && data.weight && data.weight.ounces ? data.weight.ounces : 1);
		this.unique = (data && data.unique ? data.unique : false);
		this.condition = (data && data.condition ? data.condition : 'New');
		this.customizations = (data && data.customizations ? data.customizations : '');
		this.customizationsValue = (data && data.customizationsValue
			? data.customizationsValue
			: new Coins({ gold: 0, silver: 0, copper: 0 }));
		this.isContainer = (data && data.isContainer ? data.isContainer : false);
		this.contains = (data && data.contains ? data.contains : (this.isContainer ? [] : null));
	}

	static validate(model: Item): string[] {
		const errors: string[] = [];
		return errors;
	}

	static putItemInside(container: Item, item: Item): string[] {
		if (container.isContainer) {
			container.contains.push(item);
		}
		return [ container.name + ' is not a container' ];
	}

	docify(): any {
		const data = super.docify();
		data.type = this.type;
		return data;
	}

}

