import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
	selector: '[hlmAlertDialogHeader],hlm-alert-dialog-nav',
	host: {
		'data-slot': 'alert-dialog-nav',
	},
})
export class HlmAlertDialogHeader {
	constructor() {
		classes(() => 'flex flex-col gap-2 text-center sm:text-start');
	}
}
