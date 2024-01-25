import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { XvuiButtonDirective } from 'xv-ui-kit/component/button';
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
    XvuiCardTitleDirective,],
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component-lib';
}
