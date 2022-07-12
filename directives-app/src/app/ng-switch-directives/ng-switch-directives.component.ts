import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directives',
  templateUrl: './ng-switch-directives.component.html',
  styleUrls: ['./ng-switch-directives.component.css']
})
export class NgSwitchDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() ngSwitchVariables:any;

}
