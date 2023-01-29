import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovie]'
})


export class MovieDirective {

  constructor(private elt: ElementRef) { 
    //this.setBorder(0, 'solid', 'white')
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('10px', 'solid', 'black')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('0px', 'solid', 'black')
  }
  setBorder(width:string, style:string, color: string){
    this.elt.nativeElement.style.borderWidth=`${width}`
    this.elt.nativeElement.style.borderStyle= `${style}`
    this.elt.nativeElement.style.borderColor= `${color}`
}
}