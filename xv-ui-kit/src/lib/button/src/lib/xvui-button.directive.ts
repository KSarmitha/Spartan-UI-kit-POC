import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const buttonVariants = cva(
	'inline-flex items-center justify-center rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background',
	{
		variants: {
			variant: {
				default: 'bg-primary shadow-md text-primary-foreground hover:brightness-95',
				secondary: 'bg-secondary shadow-md text-secondary-foreground hover:brightness-95',
				success: 'bg-success shadow-md text-destructive-foreground hover:brightness-95',
				destructive: 'bg-destructive shadow-md  text-destructive-foreground hover:brightness-95',
				warning: 'bg-warning shadow-md text-warning-foreground hover:brightness-95',
				info: 'bg-info shadow-md text-info-foreground hover:brightness-95',
				outline: 'border border-input  hover:bg-accent hover:text-accent-foreground',
				link: 'underline-offset-4 hover:underline text-primary',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
			},
			size: {
				icon: 'h-8 w-9',
				lg: 'h-12 p-6 text-lg',
				md: 'h-10 p-4 text-sm',
				sm: 'h-8 p-3 text-xs',
				xsm: 'h-7 p-2 text-xs',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	},
);
type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
	selector: '[xvui-button]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
})
export class XvuiButtonDirective {
	private readonly _userCls = signal<ClassValue>('');
	@Input()
	set class(userCls: ClassValue) {
		this._userCls.set(userCls);
	}

	private readonly _variant = signal<ButtonVariants['variant']>('default');
	@Input()
	set variant(variant: ButtonVariants['variant']) {
		this._variant.set(variant);
	}

	private readonly _size = signal<ButtonVariants['size']>('md');
	@Input()
	set size(size: ButtonVariants['size']) {
		this._size.set(size);
	}

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm(buttonVariants({ variant: this._variant(), size: this._size() }), this._userCls());
	}
}