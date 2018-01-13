import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-drop-down',
	templateUrl: './drop-down.component.html',
	styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
	@Input()
	id: string;
	@Input()
	collection: string;
	@Input()
	attrib: string = 'attrib';

	selected = '';

	foods = [
		{ value: '0', viewValue: 'Steak' },
		{ value: '1', viewValue: 'Pizza' },
		{ value: '2', viewValue: 'Tacos' }
	];

	ngOnInit() {
	}

}
