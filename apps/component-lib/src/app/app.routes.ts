import { Route } from '@angular/router';
import { TestTabComponent } from './test-tab/test-tab.component';
import { TestTableComponent } from './test-table/test-table.component';
import { ButtonComponent } from './button/button.component';
import { AccordionComponent } from './accordion/accordion.component';

export const appRoutes: Route[] = [
  {path: 'tab', component: TestTabComponent},
  {path: 'table', component: TestTableComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'accordion', component: AccordionComponent}
];
