import { Base } from './base.model';
import { Character } from './character.model';

export class Player extends Base {

	handle: string;
	email: string;
	friends: Player[];
	characters: Character[];
	facebook: string;
	instagram: string;
	joined: Date;
	logins: number;
	payLevel: number;
	roles: string[];
	suspended: boolean;
	twitter: string;
	warnings: string[];
	website: string;
	notes: string;

	constructor(data = null) {
		super(data);
	}

	static validate(model: Player): string[] {
		const errors: string[] = [];
		if (model.handle.length < 3) { errors.push('Player.handle must be at least 3 chars.'); }
		if (model.name.length < 3) { errors.push('Player.name must be at least 3 chars.'); }
		if (model.email.length < 7) { errors.push('Player.email must be at least 7 chars.'); }
		return errors;
	}

	static create(model: Player): string[] {
		// Add code to create and save Player here...
		return Player.validate(model);
	}

	static readById(id: string): Player {
		const player = new Player();
		return player;
	}

	static readByHandle(handle: string): Player {
		const player = new Player();
		return player;
	}

	static readByEmail(email: string): Player {
		const player = new Player();
		return player;
	}

	static update(model: Player): string[] {
		// Add code to update and save Player here...
		return Player.validate(model);
	}

	static delete(id: string)  {
		// Add code to mark Player deleted here...
	}

	docify(): any {
		const data = super.docify();
		return data;
	}

}
