import { Base } from './base';
import { LogType } from '../enum/all.enum';

export interface Log {
	type: LogType;
	text: string;
	createdOn: Date;
}
