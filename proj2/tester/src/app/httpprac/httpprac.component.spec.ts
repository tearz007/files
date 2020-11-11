import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttppracComponent } from './httpprac.component';

describe('HttppracComponent', () => {
  let component: HttppracComponent;
  let fixture: ComponentFixture<HttppracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttppracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttppracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
