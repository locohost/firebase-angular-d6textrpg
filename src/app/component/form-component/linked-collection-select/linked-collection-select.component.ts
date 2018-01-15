import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { LinkedCollectionService } from '../../../service/linked-collection.service';
import { SelectOption } from '../../../interface/select-option.interface';
import { Observable } from 'rxjs/Observable';
import { MatSelectChange } from '@angular/material';

@Component({
	selector: 'app-collection-select',
	templateUrl: './linked-collection-select.component.html',
	styleUrls: ['./linked-collection-select.component.css']
})
export class LinkedCollectionSelectComponent implements OnInit {
	@Input()
	id: string = '';
	@Input()
	collection: string = '';
	@Input()
	attrib: string = 'name';
	@Input()
	placeholder: string = '';
	@Output()
	selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

	selectOptions: SelectOption[] = [];

	constructor(private linkedCollectionService: LinkedCollectionService) { }

	selectChanged(e: MatSelectChange) {
		e['selectId'] = this.id;
		this.selectionChange.emit(e);
	}

	placeHolderText(): string {
		let first = this.placeholder.substr(0, 1);
		first = first.toUpperCase();
		return first + this.placeholder.substr(1).toLowerCase();
	}

	ngOnInit() {
		this.selectOptions = [];
		this.linkedCollectionService.readAll(this.collection, this.attrib);
		this.linkedCollectionService.linkedDocs$.subscribe(docs => {
			docs.forEach(doc => {
				this.selectOptions.push({ 'value': doc.id, 'text': doc.data[this.attrib] });
			});
			// Sort the select options alphabetically by select text
			this.selectOptions = this.selectOptions.sort(function (a, b) {
				return (
					a.text.toUpperCase() === b.text.toUpperCase()
						? 0
						: (a.text.toUpperCase() < b.text.toUpperCase() ? -1 : 1)
				);
			});
			const x = 0;
		});
	}

}

