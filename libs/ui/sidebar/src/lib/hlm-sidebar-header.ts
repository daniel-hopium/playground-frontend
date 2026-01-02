import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
	selector: '[hlmSidebarHeader],hlm-sidebar-nav',
	host: {
		'data-slot': 'sidebar-nav',
		'data-sidebar': 'header',
	},
})
export class HlmSidebarHeader {
	constructor() {
		classes(() => 'flex flex-col gap-2 p-2');
	}
}
