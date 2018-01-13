import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../core/user.interface';

@Injectable()
export class UserService {
	dbCollName: string = 'users';
	dbCollection: AngularFirestoreCollection<User>;
	dbDocument: AngularFirestoreDocument<User>;

	constructor(private afs: AngularFirestore) { }

	create(model: User): Promise<User[]> {
		this.dbCollection = this.afs.collection<User>(this.dbCollName);
		this.dbCollection.add(model);
		return this.dbCollection.valueChanges(['added']).toPromise() as Promise<User[]>;
	}

	readAll(): Promise<User[]> {
		this.dbCollection = this.afs.collection<User>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false);
		});
		return this.dbCollection.valueChanges().toPromise() as Promise<User[]>;
	}

	readByUID(uid: string): Promise<User> {
		this.dbCollection = this.afs.collection<User>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('uid', '==', uid);
		});
		return this.dbCollection[0].valueChanges().toPromise() as Promise<User>;
	}

	update(model: User): Promise<User> {
		this.dbDocument = this.afs.doc<User>(`${this.dbCollName}/${model.uid}`);
		this.dbDocument.update(model);
		return this.dbDocument.valueChanges().toPromise() as Promise<User>;
	}

	delete(model: User): Promise<User> {
		// model.deleted = true;
		// model.deletedOn = new Date();
		// model.deletedBy = 'WebUI';
		return this.update(model);
	}

}
