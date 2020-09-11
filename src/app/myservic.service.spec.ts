import { TestBed } from '@angular/core/testing';

import { MyservicService } from './myservic.service';

describe('MyservicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyservicService = TestBed.get(MyservicService);
    expect(service).toBeTruthy();
  });
});
