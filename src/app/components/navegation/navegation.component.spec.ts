import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationComponent } from './navegation.component';

describe('NavegationComponent', () => {
  let component: NavegationComponent;
  let fixture: ComponentFixture<NavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
