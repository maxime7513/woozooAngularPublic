import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCoursierComponent } from './footer-coursier.component';

describe('FooterCoursierComponent', () => {
  let component: FooterCoursierComponent;
  let fixture: ComponentFixture<FooterCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
