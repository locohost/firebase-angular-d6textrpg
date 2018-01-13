import { Component, OnInit } from '@angular/core';
import { Player } from './interface/player.interface';
import { PlayerService } from './service/player.service';
import { DropDownComponent } from './component/drop-down/drop-down.component';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	providers: [PlayerService, DropDownComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	answer: string = '';
	answerDisplay: string = '';
	showSpinner: boolean = false;
	// players: Player[];
	players: Observable<Player[]>;

	constructor(private playerService: PlayerService) { }

	showAnswer() {
		this.answerDisplay = '';
		this.showSpinner = true;
		setTimeout(() => {
			this.answerDisplay = this.answer;
			this.showSpinner = false;
		}, 2000);
	}

	ngOnInit() {
		this.playerService.readAll();
		this.players = this.playerService.players;
	}

}
