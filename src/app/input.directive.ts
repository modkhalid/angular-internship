import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {
  @HostListener('focus') onFocus=()=>{
    console.log("Focus event occer")
  }

  @HostListener('blur') onBlur=()=>{
    console.log("Blur event occer")
  }
  constructor() { }

}
