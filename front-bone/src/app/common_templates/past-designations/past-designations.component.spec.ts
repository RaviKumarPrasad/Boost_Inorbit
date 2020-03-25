import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDesignationsComponent } from './past-designations.component';

describe('PastDesignationsComponent', () => {
  let component: PastDesignationsComponent;
  let fixture: ComponentFixture<PastDesignationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastDesignationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
