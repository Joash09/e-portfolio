import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublePendulumComponent } from './double-pendulum.component';

describe('DoublePendulumComponent', () => {
  let component: DoublePendulumComponent;
  let fixture: ComponentFixture<DoublePendulumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublePendulumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublePendulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
