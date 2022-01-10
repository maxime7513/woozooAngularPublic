import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLivraisonComponent } from './popup-livraison.component';

describe('PopupLivraisonComponent', () => {
  let component: PopupLivraisonComponent;
  let fixture: ComponentFixture<PopupLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
