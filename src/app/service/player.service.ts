import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Player } from '../model/player.model';

@Injectable()
export class PlayerService {
	playerCollection: AngularFirestoreCollection<Player>;
	playerDocument: AngularFirestoreDocument<Player>;

	constructor(private afs: AngularFirestore) { }

	create(model: Player): Promise<Player[]> {
		this.playerCollection = this.afs.collection<Player>('players');
		this.playerCollection.add(model);
		return this.playerCollection.valueChanges(['added']).toPromise() as Promise<Player[]>;
	}

	readAll(): Promise<Player[]> {
		this.playerCollection = this.afs.collection<Player>('players', ref => {
			return ref.where('deleted', '==', false);
		});
		return this.playerCollection.valueChanges().toPromise() as Promise<Player[]>;
	}

	readByUID(uid: string): Promise<Player> {
		this.playerCollection = this.afs.collection<Player>('players', ref => {
			return ref.where('deleted', '==', false)
					.where('uid', '==', uid);
		});
		return this.playerCollection[0].valueChanges().toPromise() as Promise<Player>;
	}

	readByUserUID(userUID: string): Promise<Player> {
		this.playerCollection = this.afs.collection<Player>('players', ref => {
			return ref.where('deleted', '==', false)
					.where('userUID', '==', userUID);
		});
		return this.playerCollection[0].valueChanges().toPromise() as Promise<Player>;
	}

	readByHandle(handle: string): Promise<Player> {
		this.playerCollection = this.afs.collection<Player>('players', ref => {
			return ref.where('deleted', '==', false)
					.where('handle', '==', handle);
		});
		return this.playerCollection[0].valueChanges().toPromise() as Promise<Player>;
	}

	update(model: Player): Promise<Player> {
		this.playerDocument = this.afs.doc<Player>(`players/${model.uid}`);
		this.playerDocument.update(model);
		return this.playerDocument.valueChanges().toPromise() as Promise<Player>;
	}

	delete(model: Player): Promise<Player> {
		model.softDelete();
		return this.update(model);
	}

}
