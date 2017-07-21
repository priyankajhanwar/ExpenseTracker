/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpentsService } from './spents.service';

describe('SpentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpentsService]
    });
  });

  it('should ...', inject([SpentsService], (service: SpentsService) => {
    expect(service).toBeTruthy();
  }));
});
