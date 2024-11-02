import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatinaEstiloComponent } from './patina-estilo.component';

describe('PatinaEstiloComponent', () => {
  let component: PatinaEstiloComponent;
  let fixture: ComponentFixture<PatinaEstiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatinaEstiloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatinaEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
