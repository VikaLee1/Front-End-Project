import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumViktoriaComponent } from './album-viktoria.component';

describe('AlbumViktoriaComponent', () => {
  let component: AlbumViktoriaComponent;
  let fixture: ComponentFixture<AlbumViktoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumViktoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumViktoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
