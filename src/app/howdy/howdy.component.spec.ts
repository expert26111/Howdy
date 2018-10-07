import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowdyComponent } from './howdy.component';

describe('HowdyComponent', () => {
  let component: HowdyComponent;
  let fixture: ComponentFixture<HowdyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowdyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
