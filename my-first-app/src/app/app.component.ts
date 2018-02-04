import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  paragraphContent = `I like angular!!`;
  show = true;
  logs = [];

  toggleParagraph() {
    this.show = !this.show;
    this.logs.push(this.logs.length + 1);
  }

  getColor(item) {
    return item >= 5 ? 'blue' : '';
  }
}
