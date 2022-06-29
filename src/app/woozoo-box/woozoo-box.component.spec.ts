import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoozooBoxComponent } from './woozoo-box.component';

describe('WoozooBoxComponent', () => {
  let component: WoozooBoxComponent;
  let fixture: ComponentFixture<WoozooBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoozooBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoozooBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
