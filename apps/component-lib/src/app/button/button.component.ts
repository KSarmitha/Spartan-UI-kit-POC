import { Component } from '@angular/core';
import {
  XvuiButtonDirective, XvuiCardContentDirective,
  XvuiCardDescriptionDirective, XvuiCardFooterDirective,
  XvuiCardHeaderDirective,
  XvuiCardTitleDirective
} from 'xv-ui-kit';

@Component({
  selector: 'projects-button',
  standalone: true,
  imports: [
    XvuiButtonDirective,
    XvuiCardHeaderDirective,
    XvuiCardDescriptionDirective,
    XvuiCardTitleDirective,
    XvuiCardContentDirective,
    XvuiCardFooterDirective
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
