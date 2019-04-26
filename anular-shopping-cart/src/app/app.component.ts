import { AfterContentInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'shopping-cart';
  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit() {
    console.log('APP-ngAfterContentInit');
    console.log(this.elementRef.nativeElement);
  }
}
