import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Player } from '../interface/player.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerService {
	players: Observable<Player[]>;
	player: Observable<Player>;

	private dbCollName: string = 'players';
	private dbCollection: AngularFirestoreCollection<Player>;
	private dbDocument: AngularFirestoreDocument<Player>;

	constructor(private afs: AngularFirestore) { }

	create(model: Player): Promise<Player[]> {
		this.dbCollection = this.afs.collection(this.dbCollName);
		this.dbCollection.add(model);
		return this.dbCollection.valueChanges(['added']).toPromise() as Promise<Player[]>;
	}

	readAll() {
		this.dbCollection = this.afs.collection(this.dbCollName, ref => {
			return ref.where('deleted', '==', false);
		});
		this.players = this.dbCollection.valueChanges();
	}

	readByUID(uid: string) {
		this.dbCollection = this.afs.collection(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('uid', '==', uid);
		});
		this.player = this.dbCollection[0].valueChanges();
	}

	readByUserUID(userUID: string) {
		this.dbCollection = this.afs.collection(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('userUID', '==', userUID);
		});
		this.player = this.dbCollection[0].valueChanges();
	}

	readByHandle(handle: string) {
		this.dbCollection = this.afs.collection(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('handle', '==', handle);
		});
		this.player = this.dbCollection[0].valueChanges();
	}

	update(model: Player) {
		this.dbDocument = this.afs.doc(`${this.dbCollName}/${model.uid}`);
		model.modifiedOn = new Date();
		model.modifiedBy = 'WebUI';
		model.modifiedLastIP = 'Get.My.IP.Later';
		this.dbDocument.update(model);
		this.player = this.dbDocument.valueChanges();
	}

	delete(model: Player) {
		model.deleted = true;
		model.deletedOn = new Date();
		model.deletedBy = 'WebUI';
		this.update(model);
	}

}

/*
	export class AppComponent {
	todoCollectionRef: AngularFirestoreCollection<Todo>;
	todo$: Observable<Todo[]>;

	constructor(private afs: AngularFirestore) {
		this.todoCollectionRef = this.afs.collection<Todo>('todos');
		this.todo$ = this.todoCollectionRef.snapshotChanges().map(actions => {
		return actions.map(action => {
			const data = action.payload.doc.data() as Todo;
			const id = action.payload.doc.id;
			return { id, ...data };
		});
		});
	}
	}

	Retrieving nested collections

	Nesting collections is a great way to structure your data. This allows you to group related data
	structures together. If you are creating a "Task List" site, you can group "tasks" under a
	user: user/<uid>/tasks.

	To retrieve a nested collection use the collection(path: string) method.

	constructor(private afs: AngularFirestore) {
		this.userDoc = afs.doc<Item>('user/david');
		this.tasks = this.userDoc.collection<Task>('tasks').valueChanges();
	}
*/
