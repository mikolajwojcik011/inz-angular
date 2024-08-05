import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'oce-form-field input, oce-form-field textarea'
})
export class FocusActiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focusin') onFocusIn() {
    const parent = this.el.nativeElement.closest('oce-form-field');
    const targetDiv = parent?.querySelector('div');
    if (parent) {
      this.renderer.addClass(targetDiv, 'ring-2');
      this.renderer.addClass(targetDiv, 'ring-sky-500');
      this.renderer.addClass(targetDiv, 'bg-sky-50');
    }
  }

  @HostListener('focusout') onFocusOut() {
    const parent = this.el.nativeElement.closest('oce-form-field');
    const targetDiv = parent?.querySelector('div');
    if (parent) {
      this.renderer.removeClass(targetDiv, 'ring-2');
      this.renderer.removeClass(targetDiv, 'ring-sky-500');
      this.renderer.removeClass(targetDiv, 'bg-sky-50');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    const parent = this.el.nativeElement.closest('oce-form-field');
    const targetDiv = parent?.querySelector('div');
    if (parent) {
      this.renderer.addClass(targetDiv, 'hover:ring-2');
      this.renderer.addClass(targetDiv, 'hover:ring-sky-500');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const parent = this.el.nativeElement.closest('oce-form-field');
    const targetDiv = parent?.querySelector('div');
    if (parent) {
      this.renderer.removeClass(targetDiv, 'hover:ring-2');
      this.renderer.removeClass(targetDiv, 'hover:ring-sky-500');
    }
  }
}
