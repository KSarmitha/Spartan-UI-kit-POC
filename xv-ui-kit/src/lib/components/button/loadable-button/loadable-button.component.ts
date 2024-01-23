import { Component, Input } from '@angular/core';
import { XvuiButtonDirective } from 'xv-ui-kit/src/lib/ui/ui-button-helm/src/lib/hlm-button.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'xvui-loadable-button',
  standalone: true,
  imports: [XvuiButtonDirective],
  template: `
    @if (loading) {
      <button disabled xvuiBtn class="mr-4">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw0hdEVpBk7NARv9yoS6Xxq_&ust=1705745082308000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKDgyOGZ6YMDFQAAAAAdAAAAABAE" class="mr-2 animate-spin"/> 
      Please wait
    </button>
    } 
    @else {
      <button xvuiBtn class="mr-4" [variant]="'default'">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00212 5.62391C2.57313 6.02766 2.55268 6.70272 2.95643 7.13171L7.22309 11.665C7.42467 11.8792 7.70573 12.0006 7.99984 12.0006C8.29395 12.0006 8.57501 11.8792 8.77659 11.665L13.0432 7.13171C13.447 6.70272 13.4265 6.02766 12.9976 5.62391C12.5686 5.22016 11.8935 5.24061 11.4898 5.6696L8.19403 9.17131C8.08874 9.28318 7.91094 9.28318 7.80565 9.17131L4.50992 5.6696C4.10617 5.24061 3.4311 5.22016 3.00212 5.62391Z" fill="#24272E"/>
        </g>
        </svg>  
      </button>
    }
  `,
  styles: ``
})
export class LoadableButtonComponent {
  @Input() loading = false;
}
