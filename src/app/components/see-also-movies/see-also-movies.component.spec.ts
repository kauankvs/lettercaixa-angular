import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAlsoMoviesComponent } from './see-also-movies.component';

describe('SeeAlsoMoviesComponent', () => {
  let component: SeeAlsoMoviesComponent;
  let fixture: ComponentFixture<SeeAlsoMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAlsoMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAlsoMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
