import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elem.nativeElement, 'color', 'white');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'white');
  }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'black');
  }
}
