import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likes-count') LikesCount:any;
  @Input('active-status') isActive:any;

  getLikeStatus(){
    return this.isActive;
  }
  getLikesCount(){
    return this.LikesCount;
  }

  onClick(){
    if(!this.isActive)this.LikesCount++; 
    else if(this.LikesCount>0)this.LikesCount--;

    this.isActive = !this.isActive;
  }
}
