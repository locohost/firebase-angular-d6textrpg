import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TagSetService } from '../../../service/tag-set.service';
import { ToolService } from '../../../service/tool.service';
import { SelectOption } from '../../../interface/select-option.interface';
import { Observable } from 'rxjs/Observable';
import { MatSelectChange } from '@angular/material';

@Component({
	selector: 'app-tag-select',
	templateUrl: './tag-select.component.html',
	styleUrls: ['./tag-select.component.css']
})
export class TagSelectComponent implements OnInit {
	@Input()
	id: string = '';
	@Input()
	collection: string = '';
	@Input()
	attrib: string = '';
	@Output()
	selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

	tags: SelectOption[] = [];

	constructor(
		private tagService: TagSetService,
		private toolService: ToolService
	) { }

	selectChanged(e: MatSelectChange) {
		e['selectId'] = this.id;
		this.selectionChange.emit(e);
	}

	placeHolderText(): string {
		let first = this.attrib.substr(0, 1);
		first = first.toUpperCase();
		return first + this.attrib.substr(1).toLowerCase();
	}

	ngOnInit() {
		this.tags = [];
		this.tagService.readByCollectionAndAttrib(this.collection, this.attrib);
		this.tagService.tagSets$.subscribe(tagSets => {
			// this.tags = this.toolService.fillSelectOptions(tagSets[0].tags);
			tagSets[0].tags.forEach(tag => {
				const tags = tag.split('=');
				this.tags.push({ 'value': tags[0], 'text': tags[1] });
			});
			this.tags = this.toolService.sortArrayText(this.tags);
		});
	}

}

