/* eslint-disable no-useless-constructor */

import BaseData from './base.data-context';
import CharacterModel from '../models/character.model';

class CharacterData extends BaseData {
	constructor(http, db) {
		super(http, db);
	}

	static instance = null;
	
	static getInstance(http, db) {
		if (!CharacterData.instance) {
			let Player = new CharacterData(http, db);
			Player.collection = db.collection('player');
			CharacterData.instance = Object.freeze(Player);
		}
		return CharacterData.instance;
	}

	collection = null;

	getAll(doneSuccess, doneError) {
		const doneGet = (querySnapshot) => {
			let models = [];
			querySnapshot.forEach((doc) => {
				models.push(new CharacterModel({ id: doc.id, data: doc.data() }));
			});
			return doneSuccess(models);
		};
		const query = this.collection.where('del', '==', false)
		super.getByQuery(query, doneGet, doneError);
	}

	getById(playerId, doneSuccess, doneError) {
		const doneGet = (snapshot) => {
			return doneSuccess(new CharacterModel({ id: snapshot.id, data: snapshot.data() }));
		};
		super.getById(this.collection, playerId, doneGet, doneError);
	}

	create(model, doneSuccess, doneError) {
		const validateError = CharacterModel.validate(model);
		if (validateError) return doneError(validateError);
		// Create
		super.create(this.collection, model, doneSuccess, doneError);
	}

	update(model, doneSuccess, doneError) {
		const validateError = CharacterModel.validate(model);
		if (validateError) return doneError(validateError);
		// Update
		super.update(this.collection, model, doneSuccess, doneError);
	}

	delete(id, doneSuccess, doneError) {
		super.delete(this.collection, id, doneSuccess, doneError);
	}
	
}; // end class

export default CharacterData;
