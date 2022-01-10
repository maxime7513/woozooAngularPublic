import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecteurComponent } from './header-secteur.component';

describe('HeaderSecteurComponent', () => {
  let component: HeaderSecteurComponent;
  let fixture: ComponentFixture<HeaderSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
