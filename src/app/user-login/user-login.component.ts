import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
	selector: 'user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

	canEdit;

	constructor(public auth: AuthService) { }

	ngOnInit() {
	}

}
