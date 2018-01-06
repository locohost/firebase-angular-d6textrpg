/* eslint-disable no-useless-constructor */

import BaseData from './base.data-context';
import PlayerModel from '../models/player.model';

class PlayerData extends BaseData {
	constructor(http, db) {
		super(http, db);
	}

	static instance = null;
	
	static getInstance(http, db) {
		if (!PlayerData.instance) {
			let Player = new PlayerData(http, db);
			Player.collection = db.collection('player');
			PlayerData.instance = Object.freeze(Player);
		}
		return PlayerData.instance;
	}

	collection = null;

	addFriend(model, friendId, done) {
		// var friendRef = this.collection.doc(friendId);
		// model.Friends().push(friendRef);
		// this.update(model, {
		// 	success: (model) => {
		// 		done.success(model);
		// 	},
		// 	error: (error) => {
		// 		done.error(error);
		// 	}
		// })
	}

	getAll(doneSuccess, doneError) {
		const doneGet = (querySnapshot) => {
			let models = [];
			querySnapshot.forEach((doc) => {
				models.push(new PlayerModel({ id: doc.id, data: doc.data() }));
			});
			return doneSuccess(models);
		};
		const query = this.collection.where('del', '==', false)
		super.getByQuery(query, doneGet, doneError);
	}

	getById(playerId, doneSuccess, doneError) {
		const doneGet = (snapshot) => {
			return doneSuccess(new PlayerModel({ id: snapshot.id, data: snapshot.data() }));
		};
		super.getById(this.collection, playerId, doneGet, doneError);
	}

	create(model, doneSuccess, doneError) {
		const validateError = PlayerModel.validate(model);
		if (validateError) return doneError(validateError);
		// Create
		super.create(this.collection, model, doneSuccess, doneError);
	}

	update(model, doneSuccess, doneError) {
		const validateError = PlayerModel.validate(model);
		if (validateError) return doneError(validateError);
		// Update
		super.update(this.collection, model, doneSuccess, doneError);
	}

	delete(id, doneSuccess, doneError) {
		super.delete(this.collection, id, doneSuccess, doneError);
	}

	publish(model, doneSuccess, doneError) {
		model.PublishedOn(new Date());
		this.update(model, doneSuccess, doneError);
	}
	
}; // end class

export default PlayerData;
