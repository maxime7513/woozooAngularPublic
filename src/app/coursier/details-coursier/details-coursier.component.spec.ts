import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCoursierComponent } from './details-coursier.component';

describe('DetailsCoursierComponent', () => {
  let component: DetailsCoursierComponent;
  let fixture: ComponentFixture<DetailsCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
