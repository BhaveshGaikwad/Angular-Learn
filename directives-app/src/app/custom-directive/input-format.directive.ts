import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @Input('format') format:any;

  @HostListener('blur') toUpperCase(){
    let value:string= this.el.nativeElement.value;
    if(this.format=='lower')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();

}

}
