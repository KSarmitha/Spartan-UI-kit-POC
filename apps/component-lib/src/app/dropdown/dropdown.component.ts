import { Component } from '@angular/core';
import {
  BrnMenuTriggerDirective,
  HlmMenuComponent,
  HlmMenuGroupComponent, HlmMenuItemDirective,
  HlmMenuSeparatorComponent,
  XvuiButtonDirective
} from 'xv-ui-kit';
import { HlmMenuLabelComponent } from '../../../../../xv-ui-kit/src/lib/dropdown/src/lib/hlm-menu-label.component';
import { HlmSubMenuComponent } from '../../../../../xv-ui-kit/src/lib/dropdown/src/lib/hlm-sub-menu.component';
import {
  HlmMenuItemSubIndicatorComponent
} from '../../../../../xv-ui-kit/src/lib/dropdown/src/lib/hlm-menu-item-sub-indicator.component';

@Component({
  selector: 'projects-dropdown',
  standalone: true,
  imports: [
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuGroupComponent,
    XvuiButtonDirective,
    HlmMenuItemDirective,
    HlmSubMenuComponent,
    HlmMenuItemSubIndicatorComponent
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

}
