import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	answer: string = '';
	answerDisplay: string = '';
	showSpinner: boolean = false;

	constructor() { }

	showAnswer() {
		this.answerDisplay = '';
		this.showSpinner = true;
		setTimeout(() => {
			this.answerDisplay = this.answer;
			this.showSpinner = false;
		}, 2000);
	}

	ngOnInit() { }

}
