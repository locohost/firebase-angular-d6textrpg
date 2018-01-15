import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LinkedCollectionService {
	linkedDocs$: Observable<any[]>;
	linkedDoc$: Observable<any>;
	dbCollection: AngularFirestoreCollection<any>;
	dbDocument: AngularFirestoreDocument<any>;

	constructor(private afs: AngularFirestore) { }

	readAll(collectionName: string, order: string = 'name') {
		this.dbCollection = this.afs.collection(collectionName, ref => {
			return ref.where('deleted', '==', false).orderBy(order);
		});
		this.linkedDocs$ = this.dbCollection.valueChanges();
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
