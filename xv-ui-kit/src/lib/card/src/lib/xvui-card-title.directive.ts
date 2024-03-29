import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const cardTitleVariants = cva('text-lg font-semibold leading-none tracking-tight', {
	variants: {},
	defaultVariants: {},
});
export type CardTitleVariants = VariantProps<typeof cardTitleVariants>;

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[xvui-card-title]',
	standalone: true,
	// eslint-disable-next-line @angular-eslint/no-host-metadata-property
	host: {
		'[class]': '_computedClass()',
	},
})
export class XvuiCardTitleDirective {
	private readonly _userCls = signal<ClassValue>('');
	@Input()
	set class(userCls: ClassValue) {
		this._userCls.set(userCls);
	}

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm(cardTitleVariants(), this._userCls());
	}
}