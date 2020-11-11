import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tap3Component } from './tap3.component';

describe('Tap3Component', () => {
  let component: Tap3Component;
  let fixture: ComponentFixture<Tap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
