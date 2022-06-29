import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursierPresentationComponent } from './coursier-presentation.component';

describe('CoursierPresentationComponent', () => {
  let component: CoursierPresentationComponent;
  let fixture: ComponentFixture<CoursierPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursierPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursierPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
