import { TestBed } from '@angular/core/testing';

import { AccountApiService } from './account-api.service';

describe('LetterboxApiMovieService', () => {
  let service: AccountApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
