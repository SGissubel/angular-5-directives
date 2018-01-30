import { Directive, Input, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elem.nativeElement, 'color', 'white');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'white');
    this.backgroundColor = this.highlightColor;
  }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
  }
}
