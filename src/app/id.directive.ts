import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appId]',
})
export class IdDirective {
  @Input() set appId(value: number) {
    this.id = value;
  }

  id: number = 0;

  constructor() {}
}
