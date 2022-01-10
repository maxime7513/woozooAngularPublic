import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteursDetailsComponent } from './secteurs-details.component';

describe('SecteursDetailsComponent', () => {
  let component: SecteursDetailsComponent;
  let fixture: ComponentFixture<SecteursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecteursDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecteursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
