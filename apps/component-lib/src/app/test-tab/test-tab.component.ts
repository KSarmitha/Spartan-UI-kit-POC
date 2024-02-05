import { Component, ViewChild, ViewChildren } from '@angular/core';
import {
  BrnTabsDirective, XvuiButtonDirective, XvuiTabChangesDirective,
  XvuiTabIconDirective,
  XvuiTabsContentDirective,
  XvuiTabsListDirective,
  XvuiTabsTriggerDirective
} from 'xv-ui-kit';

@Component({
  selector: 'projects-test-tab',
  standalone: true,
  imports: [
    BrnTabsDirective,
    XvuiTabsListDirective,
    XvuiTabsTriggerDirective,
    XvuiTabsContentDirective,
    XvuiTabIconDirective,
    XvuiButtonDirective,
    XvuiTabChangesDirective
  ],
  templateUrl: './test-tab.component.html',
  styleUrl: './test-tab.component.css'
})
export class TestTabComponent {

  public disableBtb = true;

  @ViewChild(XvuiTabChangesDirective) tabChanges!: XvuiTabChangesDirective;
  goToNext(): void{
    this.tabChanges.changeTab('test');
  }

  goToPassword(): void{
    this.tabChanges.changeTab('password');
  }

  goToAccount(): void{
    this.tabChanges.changeTab('account');
  }

  toggle(): void{
    this.disableBtb = !this.disableBtb;
  }
}
