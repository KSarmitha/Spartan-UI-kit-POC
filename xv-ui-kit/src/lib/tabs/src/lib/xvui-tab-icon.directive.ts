import { computed, Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';
import { BrnTabsDirective } from './brn-tabs.directive';
import { host } from '@nx/angular/generators';

@Directive({
  selector: '[xvuiTabIcon]',
  standalone: true,
  host: {
    '[src]': '_isSelected() ?  inActiveIcon : activeIcon'
  }
})

export class XvuiTabIconDirective{

  private readonly _root = inject(BrnTabsDirective);
  private _key: string | undefined;
  protected readonly _isSelected = computed(() => this._root.$value() === this._key);
  @Input() set appImageSrc(src: string) {
    // console.log(this._isSelected());
    // console.log(this._key);
    // console.log(this._root.$value());
    // this.renderer.setAttribute(this.el.nativeElement, 'src', src);
  }

  @Input()
  public activeIcon = '';

  @Input()
  public inActiveIcon = ''

  @Input('xvuiTabIcon')
  set triggerFor(key: string) {
    console.log(key);
    this._key = key;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setAttribute(this.el.nativeElement, 'src', this.selected() ? this.activeIcon : this.inActiveIcon);
  }
}
