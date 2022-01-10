import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterProfessionnelComponent } from './footer-professionnel.component';

describe('FooterProfessionnelComponent', () => {
  let component: FooterProfessionnelComponent;
  let fixture: ComponentFixture<FooterProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterProfessionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
