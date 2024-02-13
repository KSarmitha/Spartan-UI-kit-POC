import { booleanAttribute, Component, computed, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'xvui-trow',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
		role: 'row',
	},
	template: `
      <ng-content />

	`,
  styles: `

  `
})
export class XvuiTrowComponent {
	@Input({ transform: booleanAttribute })
	public truncate = false;

  public sid = '';

	private readonly _userCls = signal<ClassValue>('');
	@Input()
	set class(inputs: ClassValue) {
		this._userCls.set(inputs);
	}

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm(
			'flex flex border-dashed border-b border-dull transition-colors  data-[state=selected]:bg-muted  ',
			this._userCls(),
		);
	}
}
