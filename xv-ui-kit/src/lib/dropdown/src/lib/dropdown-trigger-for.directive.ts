import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import {
  HorizontalConnectionPos,
  Overlay,
  OverlayRef,
  VerticalConnectionPos,
} from '@angular/cdk/overlay';
import { merge, Observable, Subscription } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
@Directive({
  selector: '[xvuiDropdownTriggerFor]',
  host: {
    '(click)': 'toggleDropdown()'
  },
  standalone: true
})
export class DropdownTriggerForDirective implements OnDestroy {
  private isDropdownOpen = false;
  private overlayRef!: OverlayRef;
  private dropdownClosingActionsSub = Subscription.EMPTY;
  subItemsOverlays = new Array<OverlayRef>();

  @Input('xvuiDropdownTriggerFor') public dropdownPanel: any;
  @Input() originX: HorizontalConnectionPos = 'end';
  @Input() originY: VerticalConnectionPos = 'bottom';
  @Input() overlayX: HorizontalConnectionPos = 'end';
  @Input() overlayY: VerticalConnectionPos = 'top';
  @Input() offsetY = 0;
  @Input() disabled = false;
  @Input() isScrollable = false;
  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown();
    }
  }

  openDropdown(): void {
    this.isDropdownOpen = true;

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.isScrollable ? this.overlay.scrollStrategies.noop() : this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: this.originX,
            originY: this.originY,
            overlayX: this.overlayX,
            overlayY: this.overlayY,
            offsetY: this.offsetY,
          },
        ]),
    });
    this.subItemsOverlays.push(this.overlayRef);
    const templatePortal = new TemplatePortal(
      this.dropdownPanel.templateRef,
      this.viewContainerRef
    );
    this.overlayRef.attach(templatePortal);

    this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(
      () => this.destroyDropdown()
    );
  }

  destroyDropdown(): void {
    if (!this.overlayRef || !this.isDropdownOpen) {
      return;
    }

    this.dropdownClosingActionsSub.unsubscribe();
    this.isDropdownOpen = false;
    this.overlayRef.detach();
  }

  dropdownClosingActions(): Observable<unknown> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    const dropdownClosed = this.dropdownPanel.closed;

    return merge(backdropClick$, detachment$, dropdownClosed);
  }

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.hideOverlays();
    }
  }

  hideOverlays() {
    this.subItemsOverlays.forEach((o) => o.dispose());
    this.subItemsOverlays.length = 0;
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
