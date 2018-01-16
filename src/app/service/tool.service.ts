import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolService {

	constructor() { }

	sortArrayText(array: any[], field: string = 'text'): any[] {
		return array.sort(function (a, b) {
			return (
				a.text.toUpperCase() === b[field].toUpperCase()
					? 0
					: (a.text.toUpperCase() < b[field].toUpperCase() ? -1 : 1)
			);
		});
	}

	fillSelectOptions(arr: any[]): any[] {
		// const retArr: any[] = [];
		// arr.forEach(elem => {
		// 	retArr.push({ 'value': elem[0], 'text': elem[1] });
		// });
		return arr;
	}

}
