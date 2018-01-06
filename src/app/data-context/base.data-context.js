/* eslint-disable no-useless-constructor */

class BaseData {
	constructor(http, db) {
		this.cloudFunctionsUrl = 'https://us-central1-d6textrpg-vue.cloudfunctions.net';
		if (process.env.NODE_ENV === 'development') {
			this.cloudFunctionsUrl = 'http://localhost:5000/d6textrpg-vue/us-central1';
		}
		this.http = http;
		this.db = db;
		this.userData = (localStorage.getItem('userData') != null ? JSON.parse(localStorage.getItem('userData')) : null)
		this.accessToken = (this.userData != null ? this.userData.accessToken : '');
		this.requestHeaders = { headers: { 'Authorization': 'Bearer ' + this.accessToken } };
	}

	http = null; 
	db = null;
	cloudFunctionsUrl = null;
	userData = null;
	accessToken = null;
	requestHeaders = null;

	getByFunction(cloudFunctionName, doneSuccess, doneError) {
		const getSuccess = (response) => {
			let docs = [];
			response.data.forEach((doc) => {
				docs.push(doc);
			});
			return doneSuccess(docs);
		};
		const url = this.cloudFunctionsUrl + '/' + cloudFunctionName;
		this.http.get(url, this.requestHeaders).then(getSuccess).catch(doneError);
	}

	getById(firestoreCollection, docId, doneSuccess, doneError) {
		const getSuccess = (doc) => {
			if (doc.exists) {
				return doneSuccess(doc);
			} else {
				return doneError(firestoreCollection.id + '/' + docId + ' does not exist.');
			}
		};
		// debugger;
		firestoreCollection.doc(docId).get().then(getSuccess).catch(doneError);
	}

	getByQuery(query, doneSuccess, doneError) {
		let docs = [];
		query.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					docs.push(doc);
				});
				doneSuccess(docs);
			})
			.catch(doneError);
	}

	create(collection, model, doneSuccess, doneError) {
		const doneCreate = (doc) => {
			model.attribs = doc;
			return doneSuccess(model);
		};
		delete model.attribs.id; // Do not allow id when creating
		model.attribs.createdby = 'WebUI';
		model.attribs.createdon = new Date();
		model.attribs.modifiedby = 'WebUI';
		model.attribs.modifiedon = new Date();
		model.attribs.modifiedlastip = '';
		collection.add(model.attribs).then(doneCreate).catch(doneError);
	}

	update(collection, model, doneSuccess, doneError) {
		const doneUpdate = (doc) => {
			model.attribs = doc;
			return doneSuccess(model);
		};
		model.attribs.modifiedby = 'WebUI';
		model.attribs.modifiedon = new Date();
		model.attribs.modifiedlastip = '';
		collection.doc(model.Id).update(model.attribs).then(doneUpdate).catch(doneError);
	}

	delete(collection, model, doneSuccess, doneError) {
		model.attribs.del = true;
		this.update(collection, model, doneSuccess, doneError);
	}

}; // end class

export default BaseData;
