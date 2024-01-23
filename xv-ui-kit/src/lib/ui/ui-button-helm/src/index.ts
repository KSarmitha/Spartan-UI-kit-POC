import { NgModule } from '@angular/core';
import { XvuiButtonDirective } from './lib/hlm-button.directive';

export * from './lib/hlm-button.directive';

@NgModule({
	imports: [XvuiButtonDirective],
	exports: [XvuiButtonDirective],
})
export class XvuiButtonModule {}
