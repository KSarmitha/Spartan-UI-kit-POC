import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { XvuiInputDirective, XvuiInputErrorDirective } from 'xv-ui-kit';
import { LoadableButtonComponent, XvuiButtonDirective } from 'xv-ui-kit/component/button';
import {
  XvuiCardContentDirective,
  XvuiCardDescriptionDirective,
  XvuiCardDirective,
  XvuiCardFooterDirective,
  XvuiCardHeaderDirective,
  XvuiCardTitleDirective
} from 'xv-ui-kit/component/card';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent, 
    RouterModule, 
    XvuiButtonDirective,
    XvuiCardHeaderDirective,
    XvuiCardContentDirective,
    XvuiCardContentDirective,
    XvuiCardDescriptionDirective,
    XvuiCardDirective,
    XvuiCardFooterDirective,
    XvuiCardTitleDirective,
    LoadableButtonComponent,
    XvuiInputDirective,
    XvuiInputErrorDirective],
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component-lib';
}
