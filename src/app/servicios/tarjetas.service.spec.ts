import { TestBed } from '@angular/core/testing';

import { TarjetasService } from './tarjetas.service';

describe('ListarTarjetasService', () => {
  let service: TarjetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
