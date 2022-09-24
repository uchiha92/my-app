import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[imageMissing]'
})
export class ImageMissingDirective {
  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.el.nativeElement.src = "/assets/iconos/iconPokeball.svg";
  }
}
