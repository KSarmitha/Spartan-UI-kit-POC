import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { XvuiInputDirective, XvuiInputErrorDirective } from 'xv-ui-kit';
import { XvuiButtonDirective, XvuiIconButtonComponent, XvuiLoadableButtonComponent } from 'xv-ui-kit/component/button';
import {
  XvuiCardContentDirective,
  XvuiCardDescriptionDirective,
  XvuiCardDirective,
  XvuiCardFooterDirective,
  XvuiCardHeaderDirective,
  XvuiCardTitleDirective
} from 'xv-ui-kit/component/card';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TestTabComponent } from './test-tab/test-tab.component';
import { TestTableComponent } from './test-table/test-table.component';

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
    TestTabComponent,
    TestTableComponent,
    XvuiLoadableButtonComponent,
    XvuiInputDirective,
    XvuiInputErrorDirective,
    XvuiIconButtonComponent]
  ],
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component-lib';
  isLoading = true;
}
