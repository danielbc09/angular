import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deep directives';
  oddNumbers = [1, 2, 3];
  evenNumbers = [2, 4];
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = true;
}
