import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuSecteurComponent } from './contenu-secteur.component';

describe('ContenuSecteurComponent', () => {
  let component: ContenuSecteurComponent;
  let fixture: ComponentFixture<ContenuSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
