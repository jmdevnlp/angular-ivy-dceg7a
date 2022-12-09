import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  date = "Today's date is " + String(Date());
  rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
}
