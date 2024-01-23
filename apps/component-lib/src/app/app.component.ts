import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { XvuiButtonDirective } from '@spartan-ng/ui-button-helm';
import { LoadableButtonComponent } from '@xventure/xv-ui-kit';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, XvuiButtonDirective, LoadableButtonComponent],
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component-lib';
}
