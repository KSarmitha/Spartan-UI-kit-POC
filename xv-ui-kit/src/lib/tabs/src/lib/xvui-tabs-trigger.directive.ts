import { Directive, Input, computed, signal, inject, booleanAttribute } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';
import { BrnTabsDirective } from './brn-tabs.directive';

@Directive({
  selector: '[xvuiTabsTrigger]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
    '(click)': 'activate()',
    '[attr.data-state]': "selected() ? 'active' : 'inactive'",
    '[attr.disabled]': "disabled ? true : undefined",
  },
})
export class XvuiTabsTriggerDirective{
  private readonly _userCls = signal<ClassValue>('');
  private readonly _root = inject(BrnTabsDirective);
  private _key: string | undefined;
  protected contentId: string | undefined;
  protected labelId: string | undefined;

  public readonly selected = computed(() => this._root.$value() === this._key);

  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  @Input({ transform: booleanAttribute })
  public disabled = false;

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(
      'inline-flex px-2.5 items-center justify-center  rounded-sm text-GrayShadesNormal transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:rounded-md data-[state=active]:text-vvBright data-[state=active]:activeTabShadow font-semibold h-full text-sm leading-4  hover:text-vvBright',
      this._userCls(),
    );
  }

  @Input('xvuiTabsTrigger')
  set triggerFor(key: string) {
    this._key = key;
    this.contentId = 'brn-tabs-content-' + this._key;
    this.labelId = 'brn-tabs-label-' + this._key;
    this._root.registerTrigger(key, this);
  }

  public activate() {
    console.log('hi');
    console.log(this._key);
    if (!this._key) return;
    this._root.setValue(this._key);
  }

  public changeTab(key: string): void{
    console.log('xx');
    this._root.setValue(key);
  }
}
