import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadingsComponent } from './threadings.component';

describe('ThreadingsComponent', () => {
  let component: ThreadingsComponent;
  let fixture: ComponentFixture<ThreadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
