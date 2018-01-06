import { Base } from './base';
import { Spell } from './spell';
import { Item } from './item';
import { Coins } from './coins';
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
