import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const cardContentVariants = cva('p-6 pt-0', {
	variants: {},
	defaultVariants: {},
});
export type CardContentVariants = VariantProps<typeof cardContentVariants>;

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[xvui-card-content]',
	standalone: true,
	// eslint-disable-next-line @angular-eslint/no-host-metadata-property
	host: {
		'[class]': '_computedClass()',
	},
})
export class XvuiCardContentDirective {
	private readonly _userCls = signal<ClassValue>('');
	@Input()
	set class(userCls: ClassValue) {
		this._userCls.set(userCls);
	}

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm(cardContentVariants(), this._userCls());
	}
}