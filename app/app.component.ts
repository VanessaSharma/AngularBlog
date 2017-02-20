import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Devi Blog</h1>
  <h2>{{month}} /{{day}}/{{year}}</h2>
  <h3>{{ currentTagLine}}</h3>
  </div>
  `
})

export class AppComponent{
  currentTagLine : string = 'For the real girl';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();
}
