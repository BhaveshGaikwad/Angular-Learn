import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4-app';

  tweet ={
    body: 'Here is and sample body of tweet!',
    isLiked :false,
    likesCount: 0
  }
}
