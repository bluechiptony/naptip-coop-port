import { TestBed } from '@angular/core/testing';

import { ZonalCommandService } from './zonal-command.service';

describe('ZonalCommandService', () => {
  let service: ZonalCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonalCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
