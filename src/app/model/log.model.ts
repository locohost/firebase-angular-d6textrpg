import { Base } from './base.model';
import { LogType } from '../enum/all.enum';

export class Log {
	type: LogType;
	text: string;
	createdOn: Date;

	constructor(data) {
		this.type = data.type;
		this.text = data.text;
		this.createdOn = new Date();
	}

	static create(log: Log) {
		// Add code to create and save here...
	}

	docify(): any {
		return {
			'type': this.type,
			'text': this.text,
			'createdOn': this.createdOn
		};
	}
}
