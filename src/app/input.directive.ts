import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {
  // @HostListener('focus') onFocus=()=>{
  //   console.log("Focus event occer")
  // }
  constructor(private el:ElementRef) { 
    
  }
  @HostListener('blur') onBlur=()=>{
    // console.log("Blur event occer")
    let value:string=this.el.nativeElement.value;
    this.el.nativeElement.value=value.toLowerCase();
  }
  

}
