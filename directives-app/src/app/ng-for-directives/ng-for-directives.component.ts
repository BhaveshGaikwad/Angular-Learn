import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directives',
  templateUrl: './ng-for-directives.component.html',
  styleUrls: ['./ng-for-directives.component.css']
})
export class NgForDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() ngForVariable:any;
  
}
