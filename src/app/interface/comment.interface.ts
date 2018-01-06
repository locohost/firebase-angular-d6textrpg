import { Base } from './base.interface';
import { Player } from './player.interface';

export interface Comment extends Base {
	author: Player;
	text: string;
}
