import { Base } from './base';
import { Player } from './player';
import { Comment } from './comment';

export interface Article extends Base {
	body: string;
	author: Player;
	timesRead: number;
	comments: Comment[];
}
