import { Directive, Input, computed, signal, inject, ElementRef } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';
import { BrnTabsDirective } from './brn-tabs.directive';

@Directive({
  selector: '[xvuiTabsContent]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
    '[hidden]': '_isSelected() === false',
  },
})
export class XvuiTabsContentDirective {
  private readonly _userCls = signal<ClassValue>('');
  private _key: string | undefined;
  private _root = inject(BrnTabsDirective);
  private _elementRef = inject(ElementRef);

  protected contentId: string | undefined;
  protected labelId: string | undefined;

  protected readonly _isSelected = computed(() => this._root.$value() === this._key);
  protected x = computed(() => {
    console.log(this._root.$value);
  })
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white',
      this._userCls(),
    );
  }


  @Input('xvuiTabsContent')
  set contentFor(key: string) {
    this._key = key;
    this.contentId = 'brn-tabs-content-' + this._key;
    this.labelId = 'brn-tabs-label-' + this._key;
    this._root.registerContent(key, this);
  }

  public focus() {
    this._elementRef.nativeElement.focus();
  }
}
