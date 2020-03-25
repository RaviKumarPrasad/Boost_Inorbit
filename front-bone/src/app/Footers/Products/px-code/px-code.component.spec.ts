import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxCodeComponent } from './px-code.component';

describe('PxCodeComponent', () => {
  let component: PxCodeComponent;
  let fixture: ComponentFixture<PxCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
