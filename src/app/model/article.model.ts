import { Base } from './base.model';

export class Article extends Base {

	body: string;
	author: string;
	timesRead: number;

	constructor(data = null) {
		super(data);
		this.body = (data && data.body ? data.body : '');
		this.author = (data && data.author ? data.author : '');
		this.timesRead = (data && data.timesRead ? data.timesRead : 0);
	}

	static validate(model: Article): string[] {
		const errors: string[] = [];
		if (model.name.length < 5) { errors.push('Article.name (subject line) must be at least 5 chars'); }
		if (model.body.length < 5) { errors.push('Article.body must be at least 5 chars'); }
		if (model.author.length < 2) { errors.push('Article.author must be at least 2 chars'); }
		return errors;
	}

	static create(model: Article): string[] {
		// Add code to create and save Area here...
		return Article.validate(model);
	}

	static readById(id: string): Article {
		const article = new Article();
		return article;
	}

	static update(model: Article): string[] {
		// Add code to update and save here...
		return Article.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const data = super.docify();
		data.body = this.body;
		data.author = this.author;
		data.timesRead = this.timesRead;
		return data;
	}

}
