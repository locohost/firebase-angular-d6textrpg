import { Base } from './base';
import { Player } from './player';

export interface Comment extends Base {
	author: Player;
	text: string;
}
