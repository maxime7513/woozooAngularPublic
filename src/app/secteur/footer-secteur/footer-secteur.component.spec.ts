import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSecteurComponent } from './footer-secteur.component';

describe('FooterSecteurComponent', () => {
  let component: FooterSecteurComponent;
  let fixture: ComponentFixture<FooterSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
