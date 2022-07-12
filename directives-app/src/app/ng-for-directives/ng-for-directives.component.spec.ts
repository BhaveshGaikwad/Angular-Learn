import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirectivesComponent } from './ng-for-directives.component';

describe('NgForDirectivesComponent', () => {
  let component: NgForDirectivesComponent;
  let fixture: ComponentFixture<NgForDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
