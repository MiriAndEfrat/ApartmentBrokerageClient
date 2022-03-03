import { TestBed } from '@angular/core/testing';

import { CodeTablesService } from './code-tables.service';

describe('CodeTablesService', () => {
  let service: CodeTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
