import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { TagSet } from '../interface/tag-set.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagSetService {
	tagSets$: Observable<TagSet[]>;
	tagSet$: Observable<TagSet>;
	dbCollName: string = 'tag-sets';
	dbCollection: AngularFirestoreCollection<TagSet>;
	dbDocument: AngularFirestoreDocument<TagSet>;

	constructor(private afs: AngularFirestore) { }

	readAll() {
		this.dbCollection = this.afs.collection(this.dbCollName, ref => {
			return ref.where('deleted', '==', false);
		});
		this.tagSets$ = this.dbCollection.valueChanges();
	}

	readByCollection(collName: string) {
		this.dbCollection = this.afs.collection(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
				.where('collection', '==', collName);
		});
		this.tagSets$ = this.dbCollection.valueChanges();
	}

	readByCollectionAndAttrib(collName: string, attribName: string) {
		this.dbCollection = this.afs.collection(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
				.where('collection', '==', collName)
				.where('attrib', '==', attribName);
		});
		// this.tagSet$ = Observable.of({ 'attrib': '', 'collection': '', 'tags': [] } as TagSet);
		this.tagSets$ = this.dbCollection.valueChanges();
		// this.tagSets$.subscribe(tags => {
		// 	this.tagSet$ = Observable.of(tags[0]);
		// });
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
