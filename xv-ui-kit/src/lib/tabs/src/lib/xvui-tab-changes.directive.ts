import { Directive, inject } from '@angular/core';
import { BrnTabsDirective } from './brn-tabs.directive';

@Directive({
  standalone: true,
  selector: '[XvuiTabChanges]'
})

export class XvuiTabChangesDirective{
  private readonly _root = inject(BrnTabsDirective);

  public changeTab(key: string): void{
    console.log(key);
    this._root.setValue(key)
  }
}
