import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { LinkedDocService } from '../../../service/linked-doc.service';
import { ToolService } from '../../../service/tool.service';
import { SelectOption } from '../../../interface/select-option.interface';
import { Observable } from 'rxjs/Observable';
import { MatSelectChange } from '@angular/material';

@Component({
	selector: 'app-linked-doc-select',
	templateUrl: './linked-doc-select.component.html',
	styleUrls: ['./linked-doc-select.component.css']
})
export class LinkedDocSelectComponent implements OnInit {
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

	constructor(
		private linkedDocService: LinkedDocService,
		private toolService: ToolService
	) { }

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
		this.linkedDocService.readAll(this.collection, this.attrib);
		this.linkedDocService.linkedDocs$.subscribe(docs => {
			docs.forEach(doc => {
				this.selectOptions.push({ 'value': doc.id, 'text': doc.data[this.attrib] });
			});
			this.selectOptions = this.toolService.sortArrayText(this.selectOptions);
		});
	}

}

