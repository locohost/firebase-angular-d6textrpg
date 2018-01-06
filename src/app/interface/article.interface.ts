import { Base } from './base.interface';
import { Player } from './player.interface';
import { Comment } from './comment.interface';

export interface Article extends Base {
	body: string;
	author: Player;
	timesRead: number;
	comments: Comment[];
}
