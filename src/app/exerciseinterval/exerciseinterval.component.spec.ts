import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseintervalComponent } from './exerciseinterval.component';

describe('ExerciseintervalComponent', () => {
  let component: ExerciseintervalComponent;
  let fixture: ComponentFixture<ExerciseintervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseintervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseintervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
