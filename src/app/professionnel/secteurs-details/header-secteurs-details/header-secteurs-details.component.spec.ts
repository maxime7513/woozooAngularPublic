import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecteursDetailsComponent } from './header-secteurs-details.component';

describe('HeaderSecteursDetailsComponent', () => {
  let component: HeaderSecteursDetailsComponent;
  let fixture: ComponentFixture<HeaderSecteursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSecteursDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSecteursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
