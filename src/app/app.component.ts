import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';

  doSearch(value) {
    this.keyword = value;
  }

  doClear() {
    this.keyword = '';
  }
}
