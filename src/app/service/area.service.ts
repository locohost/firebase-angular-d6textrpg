import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DropDown } from '../interface/area.interface';

@Injectable()
export class AreaService {
	dbCollName: string = 'areas';
	dbCollection: AngularFirestoreCollection<DropDown>;
	dbDocument: AngularFirestoreDocument<DropDown>;

	constructor(private afs: AngularFirestore) { }

	create(model: DropDown): Promise<DropDown[]> {
		this.dbCollection = this.afs.collection<DropDown>(this.dbCollName);
		this.dbCollection.add(model);
		return this.dbCollection.valueChanges(['added']).toPromise() as Promise<DropDown[]>;
	}

	readAll(): Promise<DropDown[]> {
		this.dbCollection = this.afs.collection<DropDown>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false);
		});
		return this.dbCollection.valueChanges().toPromise() as Promise<DropDown[]>;
	}

	readByUID(uid: string): Promise<DropDown> {
		this.dbCollection = this.afs.collection<DropDown>(this.dbCollName, ref => {
			return ref.where('deleted', '==', false)
					.where('uid', '==', uid);
		});
		return this.dbCollection[0].valueChanges().toPromise() as Promise<DropDown>;
	}

	update(model: DropDown): Promise<DropDown> {
		this.dbDocument = this.afs.doc<DropDown>(`${this.dbCollName}/${model.uid}`);
		this.dbDocument.update(model);
		return this.dbDocument.valueChanges().toPromise() as Promise<DropDown>;
	}

	delete(model: DropDown): Promise<DropDown> {
		model.deleted = true;
		model.deletedOn = new Date();
		model.deletedBy = 'WebUI';
		return this.update(model);
	}

}
