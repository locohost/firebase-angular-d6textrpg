import { Base } from './base.model';
import { Player } from './player.model';
import { Comment } from './comment.model';

export class Article extends Base {

	body: string;
	author: Player;
	timesRead: number;
	comments: Comment[];

	constructor(data) {
		super(data);
		this.body = (data.body || '');
		this.author = (data.author || null);
		this.timesRead = (data.timesRead || 0);
		this.comments = (data.comments || []);
	}

	static addComment(thisArticle: Article, comment: Comment) {
		thisArticle.comments.push(comment);
	}

	static validate(model: Article): string[] {
		const errors: string[] = [];
		if (model.name.length < 5) { errors.push('Article.name (subject line) must be at least 5 chars'); }
		if (model.body.length < 5) { errors.push('Article.body must be at least 5 chars'); }
		if (!!model.author) { errors.push('Article.author must not be blank'); }
		return errors;
	}

	docify(): any {
		const comments: string[] = [];
		this.comments.forEach(comment => {
			comments.push(comment.docify());
		});
		const data = super.docify();
		data.body = this.body;
		data.authorUID = (this.author ? this.author.uid : '');
		data.authorHandle = (this.author ? this.author.handle : '');
		data.authorName = (this.author ? this.author.name : '');
		data.timesRead = this.timesRead;
		data.comments = comments;
		return data;
	}

}
