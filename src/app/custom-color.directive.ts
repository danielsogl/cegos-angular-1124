import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustomColor]',
})
export class CustomColorDirective implements OnChanges {
  // when the input has the same name as the selector
  // we can access the input with the selector name
  @Input({ alias: 'appCustomColor' }) color = 'red';

  @HostBinding('style.color') colorStyle = this.color;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.colorStyle = this.color;
    }
  }
}
