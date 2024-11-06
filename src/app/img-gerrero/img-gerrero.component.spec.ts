import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGerreroComponent } from './img-gerrero.component';

describe('ImgGerreroComponent', () => {
  let component: ImgGerreroComponent;
  let fixture: ComponentFixture<ImgGerreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgGerreroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGerreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
