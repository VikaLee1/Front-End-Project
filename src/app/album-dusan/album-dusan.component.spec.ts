import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDusanComponent } from './album-dusan.component';

describe('AlbumDusanComponent', () => {
  let component: AlbumDusanComponent;
  let fixture: ComponentFixture<AlbumDusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDusanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
