import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
	selector: '[hlmSheetHeader],hlm-sheet-nav',
	host: {
		'data-slot': 'sheet-nav',
	},
})
export class HlmSheetHeader {
	constructor() {
		classes(() => 'flex flex-col gap-1.5 p-4');
	}
}
