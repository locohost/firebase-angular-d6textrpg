import { Base } from './base.model';
import { Player } from './player.model';

export class Comment extends Base {

	author: Player;
	text: string;

	constructor(data) {
		super(data);
		this.author = data.author;
		this.text = (data.text || '');
	}

	static validate(model: Comment): string[] {
		const errors: string[] = [];
		return errors;
	}

	docify(): any {
		const data = super.docify();
		data.authorUID = (!!this.author ? this.author.uid : '');
		data.authorHandle = (!!this.author ? this.author.handle : '');
		data.authorName = (!!this.author ? this.author.name : '');
		data.text = this.text;
		return data;
	}

}
