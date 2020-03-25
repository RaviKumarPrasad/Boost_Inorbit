import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelnetComponent } from './twelnet.component';

describe('TwelnetComponent', () => {
  let component: TwelnetComponent;
  let fixture: ComponentFixture<TwelnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
