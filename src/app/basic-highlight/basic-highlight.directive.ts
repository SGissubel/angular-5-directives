import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
  /* tslint:disable */ //square brackets -> recognized as directive; /* tslint:enable */ 
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
