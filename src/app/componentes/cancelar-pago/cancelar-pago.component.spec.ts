import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarPagoComponent } from './cancelar-pago.component';

describe('CancelarPagoComponent', () => {
  let component: CancelarPagoComponent;
  let fixture: ComponentFixture<CancelarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
