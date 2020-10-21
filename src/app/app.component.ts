import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ThemeService } from './theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'energy-consumption-ui';

  constructor(private elementRef: ElementRef,private themeService: ThemeService) {}

   // tslint:disable-next-line: typedef
   ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
    //   '#304562';
      this.themeService.setDarkTheme();
  }
}
