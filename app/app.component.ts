import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Devi Blog</h1>
      <h5>{{month}}/{{day}}/{{year}}</h5>
      <h3>{{currentTagLine}}</h3>
      <h2>{{post.title}}</h2>
      <ul>
        <li *ngFor="let currentPost of posts">{{currentPost.title}} <button (click)="editPost()">Edit</button></li>
      </ul>
    </div>
  `
})

export class AppComponent{
  currentTagLine : string = 'For the real girl';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();
  posts: Post[]= [
    new Post('How to Get Fit When You Are Really a Slob', 'All you really need to do is go for a walk, and by a walk I mean walk to your favorite gelatto place instead of driving there!', 'Fitness', 'Vanessa Sharma'),
    new Post('Easy Recipes for the Uninspired Cook', 'Step one, get your phone. Step 2, call your favorite Thai place, Step 3, order!', 'Cooking', 'Vanessa Sharma')
  ];

  editPost() {
    alert("You just requested to edit this post.");
  }
}


export class Post {
  constructor(public title: string, public text: string, public category: string, public author: string){}
}
