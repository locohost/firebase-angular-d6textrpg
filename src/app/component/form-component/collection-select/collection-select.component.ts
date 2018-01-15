import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { LinkedCollectionService } from '../../../service/linked-collection.service';
import { LinkedSelect } from '../../../interface/linked-select.interface';
import { Observable } from 'rxjs/Observable';
import { MatSelectChange } from '@angular/material';

export interface LinkedCollection {
	uid: string;
	text: string;
}

@Component({
	selector: 'app-collection-select',
	templateUrl: './collection-select.component.html',
	styleUrls: ['./collection-select.component.css']
})
export class CollectionSelectComponent implements OnInit {
	@Input()
	id: string = '';
	@Input()
	collection: string = '';
	@Input()
	attrib: string = 'name';
	@Output()
	selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

	selectOptions: LinkedSelect[] = [];

	constructor(private linkedCollectionService: LinkedCollectionService) { }

	selectChanged(e: MatSelectChange) {
		e['selectId'] = this.id;
		this.selectionChange.emit(e);
	}

	placeHolder(): string {
		let first = this.attrib.substr(0, 1);
		first = first.toUpperCase();
		return first + this.attrib.substr(1).toLowerCase();
	}

	ngOnInit() {
		this.selectOptions = [];
		this.linkedCollectionService.readAll(this.collection, this.attrib);
		this.linkedCollectionService.linkedDocs$.subscribe(docs => {
			docs.forEach(doc => {
				this.selectOptions.push({ 'uid': doc.id, 'text': doc[this.attrib] });
			});
			// Sort the select options alphabetically by select text
			this.selectOptions = this.selectOptions.sort(function (a, b) {
				return (
					a.text.toUpperCase() === b.text.toUpperCase()
						? 0
						: (a.text.toUpperCase() < b.text.toUpperCase() ? -1 : 1)
				);
			});
		});
	}

}

