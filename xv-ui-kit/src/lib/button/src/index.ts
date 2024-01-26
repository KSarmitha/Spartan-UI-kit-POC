
import { NgModule } from '@angular/core';
import { XvuiButtonDirective } from './lib/xvui-button.directive';
import { XvuiLoadableButtonComponent } from './lib/xvui-loadable-button.component';

export * from './lib/xvui-button.directive';
export * from './lib/xvui-loadable-button.component';

export const XvuiButtonImports = [
	XvuiButtonDirective,
	XvuiLoadableButtonComponent
] as const;

@NgModule({
	imports: [...XvuiButtonImports],
	exports: [...XvuiButtonImports],
})
export class XvuiButtonModule {}