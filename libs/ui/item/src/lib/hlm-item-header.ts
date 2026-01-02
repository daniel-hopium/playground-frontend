import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
	selector: '[hlmItemHeader],hlm-item-nav',
	host: {
		'data-slot': 'item-nav',
	},
})
export class HlmItemHeader {
	constructor() {
		classes(() => 'flex basis-full items-center justify-between gap-2');
	}
}
