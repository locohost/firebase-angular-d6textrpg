import { Base } from './base.model';
import { Character } from './character.model';
import { PlayerService } from '../service/player.service';
import { ReflectiveInjector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Player extends Base {
	private static playerService: PlayerService = null;

	userUID: string = '';
	handle: string = '';
	friends: Player[] = [];
	characters: Character[] = [];
	facebook: string = '';
	instagram: string = '';
	joined: Date = new Date('1/1/1900');
	logins: number = 0;
	payLevel: number = 0;
	suspended: boolean = false;
	suspendReason: string = '';
	twitter: string = '';
	warnings: string[] = [];
	website: string = '';
	notes: string = '';

	constructor(data) {
		super(data);
		this.userUID = data.userUID;
		this.handle = data.handle;
		this.friends = (data.friends || []);
		this.characters = (data.characters || []);
		this.facebook = (data.facebook || '');
		this.instagram = (data.instagram || '');
		this.twitter = (data.twitter || '');
		this.joined = (data.joined || new Date());
		this.logins = (data.logins || 0);
		this.payLevel = (data.payLevel || 0);
		this.suspended = (data.suspended || false);
		this.suspendReason = (data.suspendReason || '');
		this.warnings = (data.warnings || []);
		this.website = (data.website || '');
		this.notes = (data.notes || '');

	}

	private static dataService(): PlayerService {
		if (this.playerService == null) {
			const injector = ReflectiveInjector.resolveAndCreate([PlayerService]);
			this.playerService = injector.get(PlayerService);
		}
		return this.playerService;
	}

	static validate(model: Player): string[] {
		const errors: string[] = [];
		if (model.handle.length < 3) { errors.push('Player.handle must be at least 3 chars.'); }
		if (model.name.length < 3) { errors.push('Player.name must be at least 3 chars.'); }
		return errors;
	}

	static create(model: Player) {
		this.dataService().create(model)
			.then(doc => {

			})
			.catch(err => {

			});
	}

	static readByUID(uid: string): Observable<Player> {
		this.dataService().readByUID(uid);
		return this.dataService().player;
	}

	static readByUserUID(userUID: string): Observable<Player> {
		this.dataService().readByUserUID(userUID);
		return this.dataService().player;
	}

	static readByHandle(handle: string): Observable<Player> {
		this.dataService().readByHandle(handle);
		return this.dataService().player;
	}

	static update(model: Player) {
		this.dataService().update(model)
			.then(doc => {

			})
			.catch(err => {

			});
	}

	static delete(model: Player) {
		model.delete();
		return Player.update(model);
	}

	docify(): any {
		const friends: string[] = [];
		this.friends.forEach(f => {
			friends.push(f.docify());
		});
		const chars: string[] = [];
		this.characters.forEach(c => {
			chars.push(c.docify());
		});
		const doc = super.docify();
		doc.userUID = this.userUID;
		doc.handle = this.handle;
		doc.friends = friends;
		doc.characters = chars;
		doc.facebook = this.facebook;
		doc.instagram = this.instagram;
		doc.twitter = this.twitter;
		doc.joined = this.joined;
		doc.logins = this.logins;
		doc.payLevel = this.payLevel;
		doc.suspended = this.suspended;
		doc.suspendReason = this.suspendReason;
		doc.warnings = this.warnings;
		doc.website = this.website;
		doc.notes = this.notes;
		return doc;
	}

}
