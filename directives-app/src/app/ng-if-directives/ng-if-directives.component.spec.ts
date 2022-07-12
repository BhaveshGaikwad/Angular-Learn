import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirectivesComponent } from './ng-if-directives.component';

describe('NgIfDirectivesComponent', () => {
  let component: NgIfDirectivesComponent;
  let fixture: ComponentFixture<NgIfDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
