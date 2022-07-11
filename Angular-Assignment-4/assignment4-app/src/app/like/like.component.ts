import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() LikesCount:any;
  @Input() isActive:any;

  getLikeStatus(){
    return this.isActive;
  }
  getLikesCount(){
    return this.LikesCount;
  }

}
