import { Directive, ElementRef,HostListener, Renderer2, HostBinding} from '@angular/core';
//renderer 2 examples https://www.concretepage.com/angular-2/angular-4-renderer2-example
@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {
  constructor(private element:ElementRef, private render:Renderer2) { 
    console.log(element);
    element.nativeElement.style.color='blue';
  }
   newDiv=this.render.createElement('div');
  textContent=this.render.createText('Hello sample div');


  @HostBinding('style.backgroundColor') myBackGroundColor:string='tranaparent';
  @HostListener('mouseenter') onMouseEnter() {
    this.myBackGroundColor="yellow";
    // this.highlight('yellow');
    // this.render.setStyle(this.element.nativeElement,'color', 'red');
    
    // this.render.appendChild(this.newDiv,this.textContent);
    //this.render.appendChild(this.element.nativeElement,this.newDiv)
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.myBackGroundColor='red';
    // this.highlight(null);
    // this.render.removeChild(this.element.nativeElement,this.newDiv);
  }
 
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
