import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input() defaultColor:string ="black"
  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor=this.defaultColor
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor='green'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor='purple'
  }
}
