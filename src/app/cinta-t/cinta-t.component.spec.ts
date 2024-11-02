import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CintaTComponent } from './cinta-t.component';

describe('CintaTComponent', () => {
  let component: CintaTComponent;
  let fixture: ComponentFixture<CintaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CintaTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CintaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
