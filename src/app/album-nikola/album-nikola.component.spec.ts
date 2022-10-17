import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumNikolaComponent } from './album-nikola.component';

describe('AlbumNikolaComponent', () => {
  let component: AlbumNikolaComponent;
  let fixture: ComponentFixture<AlbumNikolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumNikolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumNikolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
