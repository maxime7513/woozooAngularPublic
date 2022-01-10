import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfessionnelComponent } from './header-professionnel.component';

describe('HeaderProfessionnelComponent', () => {
  let component: HeaderProfessionnelComponent;
  let fixture: ComponentFixture<HeaderProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProfessionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
