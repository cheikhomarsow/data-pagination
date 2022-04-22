import { TestBed } from '@angular/core/testing';

import { DataPaginationService } from './data-pagination.service';

describe('DataPaginationService', () => {
  let service: DataPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
