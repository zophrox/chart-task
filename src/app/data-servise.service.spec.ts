import { TestBed } from '@angular/core/testing';

import { DataServiseService } from './data-servise.service';

describe('DataServiseService', () => {
  let service: DataServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
