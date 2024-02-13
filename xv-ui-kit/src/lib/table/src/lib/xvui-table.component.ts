import { booleanAttribute, Component, computed, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
	selector: 'xvui-table',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
		role: 'table',
	},
	template: `
		<ng-content />
	`,
})
export class XvuiTableComponent {
	@Input({ transform: booleanAttribute })
	public truncate = false;

	private readonly _userCls = signal<ClassValue>('');
  private isTableWithBorder = signal(false);
	@Input()
	set class(inputs: ClassValue) {
		this._userCls.set(inputs);
	}

  @Input()
  set isWithBorder(isBorder: boolean){
    this.isTableWithBorder.set(isBorder);
  }

	protected _computedClass = computed(() => this._generateClass());
	private _generateClass() {
		return hlm('flex flex-col [&_xvui-trow:last-child]:border-0 [&>*:nth-child(2)]:rounded-tl-lg  [&>*:nth-child(2)]:rounded-tr-lg [&>*:last-child]:rounded-bl-lg [&>*:last-child]:rounded-br-lg ',
      this._userCls(), this.getFirstRowBorder());
	}

  private getFirstRowBorder(): string{
    if (!this.isTableWithBorder()){
      return '[&_xvui-trow:first-child]:border-0';
    }
    return '';
  }
}
