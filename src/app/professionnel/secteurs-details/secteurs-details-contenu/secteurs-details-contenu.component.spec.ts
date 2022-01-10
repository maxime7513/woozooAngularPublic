import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteursDetailsContenuComponent } from './secteurs-details-contenu.component';

describe('SecteursDetailsContenuComponent', () => {
  let component: SecteursDetailsContenuComponent;
  let fixture: ComponentFixture<SecteursDetailsContenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecteursDetailsContenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteursDetailsContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
