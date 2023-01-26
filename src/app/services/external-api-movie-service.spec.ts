import { TestBed } from '@angular/core/testing';

import { ExternalApiMovieService } from './external-api-movie-service';

describe('ExternalApiMovieServiceService', () => {
  let service: ExternalApiMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalApiMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
