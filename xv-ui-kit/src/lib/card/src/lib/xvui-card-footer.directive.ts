import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const cardFooterVariants = cva('flex p-6 pt-0', {
	variants: {
		direction: {
			row: 'flex-row items-center space-x-1.5',
			column: 'flex-col space-y-1.5',
		},
	},
	defaultVariants: {
		direction: 'row',
	},
});
export type CardFooterVariants = VariantProps<typeof cardFooterVariants>;

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[xvui-card-footer]',
	standalone: true,
	// eslint-disable-next-line @angular-eslint/no-host-metadata-property
	host: {
		'[class]': '_computedClass()',
	},
})
export class XvuiCardFooterDirective {
	private readonly _userCls = signal<ClassValue>('');
	@Input()
	set class(userCls: ClassValue) {
		this._userCls.set(userCls);
	}

	private readonly _direction = signal<CardFooterVariants['direction']>('row');
	@Input()
	set direction(direction: CardFooterVariants['direction']) {
		this._direction.set(direction);
	}

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm(cardFooterVariants({ direction: this._direction() }), this._userCls());
	}
}