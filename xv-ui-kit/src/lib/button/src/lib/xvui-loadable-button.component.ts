import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { XvuiButtonDirective } from './xvui-button.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[xvui-loadable-button]', //TODO: button[xvui-loadable-button][][xvui-button]
  standalone: true,
  imports: [CommonModule, XvuiButtonDirective],
  template: `
  @if (isLoading) {
      <div  class="flex mr-4">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw0hdEVpBk7NARv9yoS6Xxq_&ust=1705745082308000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKDgyOGZ6YMDFQAAAAAdAAAAABAE" class="mr-2 animate-spin"/> 
      Please wait
    </div>
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
  @Input() isLoading = false;
}
