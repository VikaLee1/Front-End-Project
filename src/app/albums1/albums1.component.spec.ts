import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Albums1Component } from './albums1.component';

describe('Albums1Component', () => {
  let component: Albums1Component;
  let fixture: ComponentFixture<Albums1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Albums1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Albums1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
