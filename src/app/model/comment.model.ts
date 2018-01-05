import { Base } from './base.model';

export class Comment extends Base {

	postedOn: Date;
	postedBy: string;
	text: string;

	constructor(data = null) {
		super(data);
		this.postedOn = (data && data.postedOn ? data.postedOn : new Date('1/1/1900'));
		this.postedBy = (data && data.postedBy ? data.postedBy : '');
		this.text = (data && data.text ? data.text : '');
	}

	static validate(model: Comment): string[] {
		const errors: string[] = [];
		return errors;
	}

	static create(model: Comment): string[] {
		// Add code to create and save here...
		return Comment.validate(model);
	}

	static readById(id: string): Comment {
		const comment = new Comment();
		return comment;
	}

	static update(model: Comment): string[] {
		// Add code to update and save here...
		return Comment.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark deleted here...
	}

	docify(): any {
		const data = super.docify();
		data.postedOn = this.postedOn;
		data.postedBy = this.postedBy;
		data.text = this.text;
		return data;
	}

}

