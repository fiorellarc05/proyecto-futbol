import { TestBed } from '@angular/core/testing';
import { partidosService } from './partidos.service';

describe('PartidosService', () => {
  let service: partidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(partidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
