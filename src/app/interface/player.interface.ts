import { Base } from './base';
import { Character } from './character';

export interface Player extends Base {
	userUID: string;
	handle: string;
	friends: Player[];
	characters: Character[];
	facebook: string;
	instagram: string;
	joined: Date;
	logins: number;
	payLevel: number;
	suspended: boolean;
	suspendReason: string;
	twitter: string;
	warnings: string[];
	website: string;
	notes: string;
}
