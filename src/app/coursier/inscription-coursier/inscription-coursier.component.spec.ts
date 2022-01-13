import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCoursierComponent } from './inscription-coursier.component';

describe('InscriptionCoursierComponent', () => {
  let component: InscriptionCoursierComponent;
  let fixture: ComponentFixture<InscriptionCoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCoursierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
