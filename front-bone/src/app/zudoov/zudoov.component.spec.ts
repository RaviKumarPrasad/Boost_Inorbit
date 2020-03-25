import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZudoovComponent } from './zudoov.component';

describe('ZudoovComponent', () => {
  let component: ZudoovComponent;
  let fixture: ComponentFixture<ZudoovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZudoovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZudoovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
