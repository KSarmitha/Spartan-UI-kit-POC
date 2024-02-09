import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, effect, inject } from "@angular/core";
import { XvuiButtonDirective } from "./xvui-button.directive";

@Component({
    selector: 'button[xvui-icon-button]',
    standalone: true,
    imports: [CommonModule],
    hostDirectives: [XvuiButtonDirective],
    template: `
        <ng-content/>
        <!-- TODO: allow to add img after clicked button if needed -->
        <!-- <ng-content *ngIf="active"/>
        <ng-content *ngIf="!active" select="[active-icon]"/> -->
      `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styles: []
  })
  export class XvuiIconButtonComponent {
    private _xvuiButton = inject(XvuiButtonDirective);

    @Input() 
    set round(value: boolean) {
        this._xvuiButton.class = value === true ? String('rounded-full') : '';
    }

    constructor() {
        effect(() => {
            this._xvuiButton.variant = 'outline';
            this._xvuiButton.size = 'icon';
        }, {allowSignalWrites: true})
    }
  }