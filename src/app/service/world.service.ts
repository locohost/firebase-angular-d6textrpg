import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { World } from '../interface/world.interface';

@Injectable()
export class WorldService {
	dbCollName: string = 'worlds';
	dbCollection: AngularFirestoreCollection<World>;
	dbDocument: AngularFirestoreDocument<World>;

	constructor(private afs: AngularFirestore) { }

	create(model: World): Promise<World[]> {
		this.dbCollection = this.afs.collection<World>(this.dbCollName);
		this.dbCollection.add(model);
		return this.dbCollection.valueChanges(['added']).toPromise() as Promise<World[]>;
	}

	readAll(): Promise<World[]> {
		this.dbCollection = this.afs.collection<World>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false);
		});
		return this.dbCollection.valueChanges().toPromise() as Promise<World[]>;
	}

	readByUID(uid: string): Promise<World> {
		this.dbCollection = this.afs.collection<World>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('uid', '==', uid);
		});
		return this.dbCollection[0].valueChanges().toPromise() as Promise<World>;
	}

	update(model: World): Promise<World> {
		this.dbDocument = this.afs.doc<World>(`${this.dbCollName}/${model.uid}`);
		this.dbDocument.update(model);
		return this.dbDocument.valueChanges().toPromise() as Promise<World>;
	}

	delete(model: World): Promise<World> {
		model.deleted = true;
		model.deletedOn = new Date();
		model.deletedBy = 'WebUI';
		return this.update(model);
	}

}
