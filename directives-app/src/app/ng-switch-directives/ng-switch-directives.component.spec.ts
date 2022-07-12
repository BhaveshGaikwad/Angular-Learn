import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDirectivesComponent } from './ng-switch-directives.component';

describe('NgSwitchDirectivesComponent', () => {
  let component: NgSwitchDirectivesComponent;
  let fixture: ComponentFixture<NgSwitchDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
