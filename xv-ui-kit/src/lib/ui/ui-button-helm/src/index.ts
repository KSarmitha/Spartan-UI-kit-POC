import { NgModule } from '@angular/core';
import { XvuiButtonDirective } from './lib/hlm-button.directive';
import { LoadableComponentComponent } from './lib/loadable-component.component';

export * from './lib/hlm-button.directive';
export * from './lib/loadable-component.component';
@NgModule({
	imports: [XvuiButtonDirective, LoadableComponentComponent],
	exports: [XvuiButtonDirective, LoadableComponentComponent],
})
export class XvuiButtonModule {}
