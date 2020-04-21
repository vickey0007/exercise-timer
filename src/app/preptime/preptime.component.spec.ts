import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreptimeComponent } from './preptime.component';

describe('PreptimeComponent', () => {
  let component: PreptimeComponent;
  let fixture: ComponentFixture<PreptimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreptimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
