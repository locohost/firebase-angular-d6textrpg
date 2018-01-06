import { Base } from './base.interface';
import { CharRepRegion } from './char-rep-region.interface';
import { CharRepArea } from './char-rep-area.interface';
import { CharRepBuilding } from './char-rep-building.interface';
import { CharItemCarrying } from './char-item-carrying.interface';
import { CharItemInventory } from './char-item-inventory.interface';
import { Effect } from './effect.interface';
import { Facing, CharNPCLang, CharNPCAlign, CharNPCClass, CharNPCRace, CharNPCSize } from '../enum/all.enum';

export interface CharNPCBase extends Base {
	location: Node;
	facing: Facing;
	alignment: CharNPCAlign;
	classes: CharNPCClass[];
	languages: CharNPCLang[];
	appearance: {
		summary: {
			close: string;		// 0 - 4 nodes
			near: string;		// 5 - 14 nodes
			far: string; 		// 15 - 24 nodes
			veryFar: string;	// 25+ nodes
		};
		race: CharNPCRace[];
		size: CharNPCSize;
		face: string;
		body: string;
		clothing: string;
		weapons: string;
		armor: string;
		equipment: string;
	};
	reputation: {
		regions: CharRepRegion[];
		areas: CharRepArea[];
		buildings: CharRepBuilding[];
	};
	stat: {
		str: number;
		int: number;
		wis: number;
		con: number;
		dex: number;
		cha: number;
		speed: number;
		vision: number;
		hearing: number;
		smell: number;
		hitPts: number;
		experiencePts: number;
		level: number;
	};
	effects: Effect[];
	items: {
		carrying: CharItemCarrying[];
		inventory: CharItemInventory[];
	};
	knowledge: string[];
	notes: string;
}
