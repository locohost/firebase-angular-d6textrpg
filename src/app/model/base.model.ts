/* eslint-disable no-useless-constructor */

export class Base {

	uid: string = '';
	name: string = '';
	description: string = '';
	imageUrl: string = '';
	createdOn: Date = new Date();
	createdBy: string = '';
	modifiedOn: Date = new Date();
	modifiedBy: string = '';
	modifiedLastIP: string = '';
	published: boolean = false;
	publishedOn: Date = new Date('7/27/2065');
	publishedBy: string = '';
	deleted: boolean = false;
	deletedOn: Date = new Date('1/1/1900');
	deletedBy: string = '';

	constructor(data) {
		this.uid = (data && data.uid ? data.uid : null);
		this.name = (data && data.name ? data.name : '');
		this.description = (data && data.description ? data.description : '');
		this.imageUrl = (data && data.imageUrl ? data.imageUrl : '');
		this.createdOn = (data && data.createdOn ? data.createdOn : new Date());
		this.createdBy = (data && data.createdBy ? data.createdBy : '');
		this.modifiedOn = (data && data.modifiedOn ? data.modifiedOn : new Date());
		this.modifiedBy = (data && data.modifiedBy ? data.modifiedBy : '');
		this.modifiedLastIP = (data && data.modifiedLastIP ? data.modifiedLastIP : '');
		this.published = (data && data.published ? data.published : false);
		this.publishedOn = (data && data.publishedOn ? data.publishedOn : new Date('7/27/2065'));
		this.publishedBy = (data && data.publishedBy ? data.publishedBy : '');
		this.deleted = (data && data.deleted ? data.deleted : false);
		this.deletedOn = (data && data.deletedOn ? data.deletedOn : new Date('1/1/1900'));
		this.deletedBy = (data && data.deletedBy ? data.deletedBy : '');
	}

	publish() {
		this.published = true;
		this.publishedOn = new Date();
		this.publishedBy = 'WebUI';
	}

	softDelete() {
		this.deleted = true;
		this.deletedOn = new Date();
		this.deletedBy = 'WebUI';
	}

	docify(): any {
		return {
			uid: this.uid,
			name: this.name,
			description: this.description,
			imageUrl: this.imageUrl,
			createdOn: this.createdOn,
			createdBy: this.createdBy,
			modifiedOn: this.modifiedOn,
			modifiedBy: this.modifiedBy,
			modifiedLastIP: this.modifiedLastIP,
			publishedOn: this.publishedOn,
			publishedBy: this.publishedBy,
			deletedOn: this.deletedOn,
			deletedBy: this.deletedBy
		};
	}


}
