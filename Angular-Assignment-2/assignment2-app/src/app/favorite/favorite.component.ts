import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public startRate =["no-star", "half-star", "full-star"];
  public currentStar = this.startRate[0];

  clicked(){
    let index =this.startRate.indexOf(this.currentStar);
    this.currentStar = this.startRate[++index>this.startRate.length-1 ? 0 : index];
  }
}
