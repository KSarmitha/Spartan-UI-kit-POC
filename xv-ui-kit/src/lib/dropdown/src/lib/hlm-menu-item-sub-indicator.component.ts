import { Component, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Component({
  selector: 'hlm-menu-item-sub-indicator',
  standalone: true,
  template: `

	`,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmMenuItemSubIndicatorComponent {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm('inline-block ml-auto h-4 w-4', this._userCls());
  }
}
