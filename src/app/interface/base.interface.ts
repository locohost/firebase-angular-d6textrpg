export interface Base {
	uid: string;
	name: string;
	description: string;
	imageUrl: string;
	createdOn: Date;
	createdBy: string;
	modifiedOn: Date;
	modifiedBy: string;
	modifiedLastIP: string;
	published: boolean;
	publishedOn: Date;
	publishedBy: string;
	deleted: boolean;
	deletedOn: Date;
	deletedBy: string;
}
