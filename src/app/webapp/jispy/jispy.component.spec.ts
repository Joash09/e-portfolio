import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JispyComponent } from './jispy.component';

describe('JispyComponent', () => {
  let component: JispyComponent;
  let fixture: ComponentFixture<JispyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JispyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JispyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
