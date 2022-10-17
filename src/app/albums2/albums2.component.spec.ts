import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Albums2Component } from './albums2.component';

describe('Albums2Component', () => {
  let component: Albums2Component;
  let fixture: ComponentFixture<Albums2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Albums2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Albums2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
