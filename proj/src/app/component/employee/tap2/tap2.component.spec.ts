import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tap2Component } from './tap2.component';

describe('Tap2Component', () => {
  let component: Tap2Component;
  let fixture: ComponentFixture<Tap2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tap2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
