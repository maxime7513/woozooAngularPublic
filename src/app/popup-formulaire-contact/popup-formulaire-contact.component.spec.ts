import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFormulaireContactComponent } from './popup-formulaire-contact.component';

describe('PopupFormulaireContactComponent', () => {
  let component: PopupFormulaireContactComponent;
  let fixture: ComponentFixture<PopupFormulaireContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFormulaireContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFormulaireContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
