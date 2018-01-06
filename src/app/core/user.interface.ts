import { Roles } from './roles.interface';

export interface User {
	uid: string;
	email: string;
	photoURL: string;
	roles: Roles;
}
