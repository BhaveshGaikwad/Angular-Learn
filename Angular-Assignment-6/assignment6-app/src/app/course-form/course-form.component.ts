import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  constructor() { }

  public categories=[
    {
      "id":"1",
      "name":"Developement",
      "details":"dev",
    },
    {
      "id":"2",
      "name":"Art",
      "details":"art",
    },
    {
      "id":"1",
      "name":"Language",
      "details":"lang",
    }
  ]

  log(a:any){
    console.log("LOG: ",a);
    
  }
}
