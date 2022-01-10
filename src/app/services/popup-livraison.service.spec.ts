import { TestBed } from '@angular/core/testing';

import { PopupLivraisonService } from './popup-livraison.service';

describe('PopupLivraisonService', () => {
  let service: PopupLivraisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupLivraisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
