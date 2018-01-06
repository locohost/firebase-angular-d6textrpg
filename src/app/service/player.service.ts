import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Player } from '../interface/player.interface';

@Injectable()
export class PlayerService {
	dbCollName: string = 'players';
	dbCollection: AngularFirestoreCollection<Player>;
	dbDocument: AngularFirestoreDocument<Player>;

	constructor(private afs: AngularFirestore) { }

	create(model: Player): Promise<Player[]> {
		this.dbCollection = this.afs.collection<Player>(this.dbCollName);
		this.dbCollection.add(model);
		return this.dbCollection.valueChanges(['added']).toPromise() as Promise<Player[]>;
	}

	readAll(): Promise<Player[]> {
		this.dbCollection = this.afs.collection<Player>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false);
		});
		return this.dbCollection.valueChanges().toPromise() as Promise<Player[]>;
	}

	readByUID(uid: string): Promise<Player> {
		this.dbCollection = this.afs.collection<Player>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('uid', '==', uid);
		});
		return this.dbCollection[0].valueChanges().toPromise() as Promise<Player>;
	}

	readByUserUID(userUID: string): Promise<Player> {
		this.dbCollection = this.afs.collection<Player>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('userUID', '==', userUID);
		});
		return this.dbCollection[0].valueChanges().toPromise() as Promise<Player>;
	}

	readByHandle(handle: string): Promise<Player> {
		this.dbCollection = this.afs.collection<Player>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('handle', '==', handle);
		});
		return this.dbCollection[0].valueChanges().toPromise() as Promise<Player>;
	}

	update(model: Player): Promise<Player> {
		this.dbDocument = this.afs.doc<Player>(`${this.dbCollName}/${model.uid}`);
		this.dbDocument.update(model);
		return this.dbDocument.valueChanges().toPromise() as Promise<Player>;
	}

	delete(model: Player): Promise<Player> {
		model.deleted = true;
		model.deletedOn = new Date();
		model.deletedBy = 'WebUI';
		return this.update(model);
	}

}
