/* eslint-disable no-useless-constructor */

import BaseData from './base.data-context';
import ArticleModel from '../models/article.model';

class ArticleData extends BaseData {
	constructor(http, db) {
		super(http, db);
	}

	static instance = null;
	
	static getInstance(http, db) {
		if (!ArticleData.instance) {
			let Article = new ArticleData(http, db);
			Article.collection = db.collection('article');
			ArticleData.instance = Object.freeze(Article);
		}
		return ArticleData.instance;
	}

	collection = null;

	getAll(doneSuccess, doneError) {
		const getSuccess = (querySnapshot) => {
			let models = [];
			querySnapshot.forEach((doc) => {
				models.push(new ArticleModel({ id: doc.id, data: doc.data() }));
			});
			return doneSuccess(models);
		};
		const query = this.collection
			.where('publishedon', '>', new Date('1/1/1900'))
			.where('del', '==', false)
		super.getByQuery(query, getSuccess, doneError);
	}

	getById(playerId, doneSuccess, doneError) {
		const getSuccess = (snapshot) => {
			return doneSuccess(new ArticleModel({ id: snapshot.id, data: snapshot.data() }));
		};
		super.getById(this.collection, playerId, getSuccess, doneError);
	}

	create(model, doneSuccess, doneError) {
		const validateError = ArticleModel.validate(model);
		if (validateError) return doneError(validateError);

		model.CreatedBy('WebUI');
		model.ModifiedBy('WebUI');
		super.create(this.collection, model, doneSuccess, doneError);
	}

	update(model, doneSuccess, doneError) {
		const validateError = ArticleModel.validate(model);
		if (validateError) return doneError(validateError);

		model.ModifiedBy('WebUI');
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


export default ArticleData;
