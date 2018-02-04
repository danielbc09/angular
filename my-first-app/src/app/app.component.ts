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
    this.logs.push(new Date());
  }

  getColor(item) {
    return item >= 4 ? 'blue' : '';
  }
}
