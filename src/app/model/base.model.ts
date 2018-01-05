/* eslint-disable no-useless-constructor */

export class Base {

	uid: string;
	name: string;
	imageUrl: string;
	description: string;
	createdOn: Date;
	createdBy: string;
	modifiedOn: Date;
	modifiedBy: string;
	modifiedLastIP: string;
	publishedOn: Date;
	publishedBy: string;
	deletedOn: Date;
	deletedBy: string;

	constructor(data: Base) {
		this.uid = (data && data.uid ? data.uid : null);
		this.name = (data && data.name ? data.name : '');
		this.imageUrl = (data && data.imageUrl ? data.imageUrl : '');
		this.description = (data && data.description ? data.description : '');
		this.createdOn = (data && data.createdOn ? data.createdOn : new Date());
		this.createdBy = (data && data.createdBy ? data.createdBy : '');
		this.modifiedOn = (data && data.modifiedOn ? data.modifiedOn : new Date());
		this.modifiedBy = (data && data.modifiedBy ? data.modifiedBy : '');
		this.modifiedLastIP = (data && data.modifiedLastIP ? data.modifiedLastIP : '');
		this.publishedOn = (data && data.publishedOn ? data.publishedOn : new Date('7/27/2065'));
		this.publishedBy = (data && data.publishedBy ? data.publishedBy : '');
		this.deletedOn = (data && data.deletedOn ? data.deletedOn : new Date('1/1/1900'));
		this.deletedBy = (data && data.deletedBy ? data.deletedBy : '');
	}

	docify(): any {
		return {
			uid: this.uid,
			name: this.name,
			imageUrl: this.imageUrl,
			description: this.description,
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
