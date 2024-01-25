import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadableComponentComponent, XvuiButtonDirective } from '@spartan-ng/ui-button-helm';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, XvuiButtonDirective, LoadableComponentComponent],
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component-lib';
}
