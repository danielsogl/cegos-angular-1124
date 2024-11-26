import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  // scoped to button elements
  selector: 'button[appWarningButton]',
})
export class WarningButtonDirective {
  @HostBinding('style.background') buttonBackground = 'red';
  @HostBinding('style.color') buttonColor = 'white';
}

@Directive({
  // scoped to button elements
  selector: 'button[appConfirm]',
  hostDirectives: [WarningButtonDirective],
})
export class ConfirmDirective {
  @Input() confirmText = '';

  @Output() confirmed = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    if (confirm(this.confirmText)) {
      this.confirmed.emit();
    }
  }
}
