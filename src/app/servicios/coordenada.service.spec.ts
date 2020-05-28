import { TestBed } from '@angular/core/testing';

import { CoordenadaService } from './coordenada.service';

describe('CoordenadaService', () => {
  let service: CoordenadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordenadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
