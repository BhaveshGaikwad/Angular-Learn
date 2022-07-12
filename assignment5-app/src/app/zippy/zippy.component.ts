import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { 
    this.openStatus=false;
  }

  ngOnInit(): void {
  }

  @Input() title:any;
  private openStatus:boolean;

  onClick(){
    this.openStatus= !this.openStatus;
    console.log(this.openStatus);
  }
}
