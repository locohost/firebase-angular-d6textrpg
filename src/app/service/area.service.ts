import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Area } from '../interface/area.interface';

@Injectable()
export class AreaService {

	AreaCollection: AngularFirestoreCollection<Area>;
	Areas: Observable<Area[]>;

	constructor(
		private afs: AngularFirestore
	) { }

	create(model: Area) {

	}

	readByUID(uid: string) {
		this.AreaCollection = this.afs.collection<Area>('areas', ref => {
			return ref.where('uid', '==', uid);
		});
		this.Areas = this.AreaCollection.valueChanges();
	}

	readByHandle(handle: string) {
		this.AreaCollection = this.afs.collection<Area>('areas', ref => {
			return ref.where('handle', '==', handle);
		});
		this.Areas = this.AreaCollection.valueChanges();
	}

	update(area: Area) {
		const docRef: AngularFirestoreDocument<Area> = this.afs.doc(`areas/${area.uid}`);
		const data = area.docify();
		return docRef.set(data, { merge: true });
	}

	delete(id: string) {

	}

}
