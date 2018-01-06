import { Base } from './base.interface';
import { Coins } from './coins.interface';
import { Size } from './size.interface';
import { ItemType, Encumberance } from '../enum/all.enum';

export interface Item extends Base {
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
}
