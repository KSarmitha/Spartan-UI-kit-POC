
import { NgModule } from '@angular/core';
import { XvuiButtonDirective } from './lib/xvui-button.directive';

export * from './lib/xvui-button.directive';

export const XvuiButtonImports = [
	XvuiButtonDirective
] as const;

@NgModule({
	imports: [...XvuiButtonImports],
	exports: [...XvuiButtonImports],
})
export class XvuiButtonModule {}