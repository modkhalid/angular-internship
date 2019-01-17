import { Directive,HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {
  // @HostListener('focus') onFocus=()=>{
  //   console.log("Focus event occer")
  // }
  constructor(private el:ElementRef) { 
    
  }
  @Input('format') format;
  @HostListener('blur') onBlur=()=>{
    // console.log("Blur event occer")
    // let value:string=this.el.nativeElement.value;
    // this.el.nativeElement.value=value.toLowerCase();
    if (this.format=="lowercase")
      this.el.nativeElement.value=this.el.nativeElement.value.toLowercase();
    else
      this.el.nativeElement.value=this.el.nativeElement.value.toUpperCase();
  }
  

}
