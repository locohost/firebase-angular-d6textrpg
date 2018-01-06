import { Base } from './base.interface';
import { Spell } from './spell.interface';
import { Item } from './item.interface';
import { Coins } from './coins.interface';
import { RewardType, CharReputation } from '../enum/all.enum';

export interface Reward extends Base {
	type: RewardType;
	// The following attribs will be set or blank based on RewardType
	spell: Spell;
	items: Item[];
	coins: Coins;
	knowledge: string;
	experience: number;
	stat: string;
	statIncrease: number;
	repIncrease: number;
	repNew: CharReputation;
}
