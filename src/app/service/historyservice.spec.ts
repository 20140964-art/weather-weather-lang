import { TestBed } from '@angular/core/testing';

import { Historyservice } from './historyservice';

describe('Historyservice', () => {
  let service: Historyservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Historyservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
