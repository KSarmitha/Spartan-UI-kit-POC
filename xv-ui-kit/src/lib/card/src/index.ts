import { NgModule } from '@angular/core';
import { XvuiCardContentDirective } from './lib/xvui-card-content.directive';
import { XvuiCardDescriptionDirective } from './lib/xvui-card-description.directive';
import { XvuiCardFooterDirective } from './lib/xvui-card-footer.directive';
import { XvuiCardHeaderDirective } from './lib/xvui-card-header.directive';
import { XvuiCardTitleDirective } from './lib/xvui-card-title.directive';
import { XvuiCardDirective } from './lib/xvui-card.directive';

export * from './lib/xvui-card-content.directive';
export * from './lib/xvui-card-description.directive';
export * from './lib/xvui-card-footer.directive';
export * from './lib/xvui-card-header.directive';
export * from './lib/xvui-card-title.directive';
export * from './lib/xvui-card.directive';

export const XvuiCardImports = [
	XvuiCardDirective,
	XvuiCardHeaderDirective,
	XvuiCardFooterDirective,
	XvuiCardTitleDirective,
	XvuiCardDescriptionDirective,
	XvuiCardContentDirective,
] as const;

@NgModule({
	imports: [...XvuiCardImports],
	exports: [...XvuiCardImports],
})
export class XvuiCardModule {}