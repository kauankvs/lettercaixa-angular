import { TestBed } from '@angular/core/testing';

import { LetterboxApiMovieService } from './letterbox-api-movie.service';

describe('LetterboxApiMovieService', () => {
  let service: LetterboxApiMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterboxApiMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
