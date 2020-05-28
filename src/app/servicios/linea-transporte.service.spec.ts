import { TestBed } from '@angular/core/testing';

import { LineaTransporteService } from './linea-transporte.service';

describe('LineaTransporteService', () => {
  let service: LineaTransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineaTransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
