import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { XvuiButtonDirective } from './xvui-button.directive';

export type Variant = 'default' | 'destructive' | 'secondary' | 'success' | 'warning' | 'info' | 'outline' | 'ghost' | 'link';
export type Size = 'lg' | 'md' | 'sm' | 'xsm' | 'icon';
@Component({
  selector: '[xvui-loadable-button]',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [XvuiButtonDirective],
  host: {
    '[disabled]': `isLoading`,
  },
  template: `
    @if(isLoading){
      <img src="https://cdn-dppbb.nitrocdn.com/RyaJIqOPsPMsUbkNfQxAzGEZqYiXmvTP/assets/images/optimized/rev-c2e94ad/www.appseconnect.com/wp-content/uploads/2017/08/loader.gif" class="mr-2 h-inherit"/> 
      {{loadingText}}
    }
    @else {
      <ng-content></ng-content>
    }
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: []
})
export class LoadableButtonComponent {
  private _xvuiButton = inject(XvuiButtonDirective);

  @Input() isLoading = false;
  @Input() loadingText = 'Loading...';

  @Input() 
  set variant(variant: Variant){
    this._xvuiButton.variant = variant;
  }

  @Input()
  set size(size: Size){
    this._xvuiButton.size = size;
  }
}
