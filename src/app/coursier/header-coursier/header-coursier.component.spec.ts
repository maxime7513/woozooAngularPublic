import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCoursierComponent } from './header-coursier.component';

describe('HeaderCoursierComponent', () => {
  let component: HeaderCoursierComponent;
  let fixture: ComponentFixture<HeaderCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
