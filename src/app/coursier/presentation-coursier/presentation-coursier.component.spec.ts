import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCoursierComponent } from './presentation-coursier.component';

describe('PresentationCoursierComponent', () => {
  let component: PresentationCoursierComponent;
  let fixture: ComponentFixture<PresentationCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
