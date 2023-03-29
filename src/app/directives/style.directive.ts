import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit{

  @Input('appStyle') aprobado! : boolean

  constructor(
    private element : ElementRef,
    private renderer : Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,
      'color',
      this.aprobado ? '#008200' : '#CC0000')
      this.renderer.setStyle(this.element.nativeElement, 'font-size', '1rem')  
      
  }

}
