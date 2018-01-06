import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../core/user.interface';

@Injectable()
export class UserService {

	userCollection: AngularFirestoreCollection<User>;
	users: Observable<User[]>;

	constructor(
		private afs: AngularFirestore
	) { }

	getByUID(uid: string) {
		this.userCollection = this.afs.collection<User>('users', ref => {
			return ref.where('uid', '==', uid);
		});
		this.users = this.userCollection.valueChanges();
	}

	getByHandle(handle: string) {
		this.userCollection = this.afs.collection<User>('users', ref => {
			return ref.where('handle', '==', handle);
		});
		this.users = this.userCollection.valueChanges();
	}

	update(user) {
		// debugger;
		const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
		const data: User = {
			uid: user.uid,
			email: user.email,
			photoURL: user.photoURL,
			roles: {
				subscriber: true
			}
		};
		return userRef.set(data, { merge: true });
	}

}
