import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantagesSecteurComponent } from './avantages-secteur.component';

describe('AvantagesSecteurComponent', () => {
  let component: AvantagesSecteurComponent;
  let fixture: ComponentFixture<AvantagesSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvantagesSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvantagesSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
