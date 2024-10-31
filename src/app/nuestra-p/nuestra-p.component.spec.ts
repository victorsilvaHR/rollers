import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraPComponent } from './nuestra-p.component';

describe('NuestraPComponent', () => {
  let component: NuestraPComponent;
  let fixture: ComponentFixture<NuestraPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
