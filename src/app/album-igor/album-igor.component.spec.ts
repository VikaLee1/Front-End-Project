import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumIgorComponent } from './album-igor.component';

describe('AlbumIgorComponent', () => {
  let component: AlbumIgorComponent;
  let fixture: ComponentFixture<AlbumIgorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumIgorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumIgorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
