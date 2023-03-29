import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appStyleNote]",
})
export class StyleNoteDirective implements OnInit {
  @Input("appStyleNote") notaActual!: number;
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      "color",
      this.notaActual >= 6 ? "#008200" : "#CC0000"
    );
    this.renderer.setStyle(this.element.nativeElement, "font-size", "1rem");
  }
}
