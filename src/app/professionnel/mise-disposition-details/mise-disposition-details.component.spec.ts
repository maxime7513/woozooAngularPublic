import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseDispositionDetailsComponent } from './mise-disposition-details.component';

describe('MiseDispositionDetailsComponent', () => {
  let component: MiseDispositionDetailsComponent;
  let fixture: ComponentFixture<MiseDispositionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseDispositionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseDispositionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
