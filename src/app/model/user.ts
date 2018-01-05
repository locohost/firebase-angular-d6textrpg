import { Roles } from './roles';

export interface User {
	uid: string;
	handle: string;
	email: string;
	photoURL: string;
	roles: Roles;
}
