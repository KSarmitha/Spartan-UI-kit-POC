import { computed, Directive, Input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';
import { BrnAccordionItemDirective } from './brn-accordion-item.directive';

@Directive({
  selector: '[hlmAccordionItem],brn-accordion-item[hlm],hlm-accordion-item',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
  hostDirectives: [BrnAccordionItemDirective],
})
export class HlmAccordionItemDirective {
  private readonly _userCls = signal<ClassValue>('');
  protected readonly _computedClass = computed(() =>
    hlm('flex flex-1 flex-col border-b border-border', this._userCls()),
  );

  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }
}
