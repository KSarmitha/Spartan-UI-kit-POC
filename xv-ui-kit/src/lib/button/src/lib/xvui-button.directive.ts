import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const buttonVariants = cva(
	'inline-flex items-center justify-center rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background hover:brightness-95',
	{
		variants: {
			variant: {
				default: 'bg-primary shadow-md  text-primary-foreground hover:bg-primary/90',
				destructive: 'bg-destructive shadow-md  text-destructive-foreground hover:bg-destructive/90',
				outline: 'border border-input shadow-md  hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-neutral-700 text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'underline-offset-4 hover:underline text-primary',
				// primary: '',
				// secondary: '',
				// success: '',
				// destructive: '',
				// warning: '',
				// info: '',
				// outline: '',
				// link: '',
				// ghost: '',
			},
			size: {
				default: 'h-10 py-2 px-4',
				sm: 'h-9 px-3 rounded-md',
				lg: 'h-11 px-8 rounded-md',
				icon: 'h-10 w-10',
				// lg: '',
				// md: '',
				// sm: '',
				// xsm: '',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
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

	private readonly _size = signal<ButtonVariants['size']>('default');
	@Input()
	set size(size: ButtonVariants['size']) {
		this._size.set(size);
	}

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm(buttonVariants({ variant: this._variant(), size: this._size() }), this._userCls());
	}
}