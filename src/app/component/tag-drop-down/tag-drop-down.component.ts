import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TagSet } from '../../interface/tag-set.interface';
import { TagSetService } from '../../service/tag-set.service';
import { Observable } from 'rxjs/Observable';
import { MatSelectChange } from '@angular/material';

export interface TagSelectOption {
	value: string;
	text: string;
}

@Component({
	selector: 'app-tag-drop-down',
	templateUrl: './tag-drop-down.component.html',
	styleUrls: ['./tag-drop-down.component.css']
})
export class TagDropDownComponent implements OnInit {
	@Input()
	id: string = '';
	@Input()
	collection: string = '';
	@Input()
	attrib: string = '';
	@Output()
	selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

	tags: TagSelectOption[] = [];

	constructor(private tagService: TagSetService) { }

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
		this.tags = [];
		this.tagService.readByCollectionAndAttrib(this.collection, this.attrib);
		this.tagService.tagSets$.subscribe(tagSets => {
			tagSets[0].tags.forEach(tag => {
				const tags = tag.split('=');
				this.tags.push({ 'value': tags[0], 'text': tags[1] });
			});
			// Sort the tags alphabetically by tagText
			this.tags = this.tags.sort(function (a, b) {
				return (
					a.text.toUpperCase() === b.text.toUpperCase()
						? 0
						: (a.text.toUpperCase() < b.text.toUpperCase() ? -1 : 1)
				);
			});
		});
	}

}

