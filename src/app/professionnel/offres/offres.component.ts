import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public dateNow = new Date();
  public dDay = new Date('2022-09-20T12:00:00');

  public timeDifference: number;
  public secondsToDday: number;
  public minutesToDday: number;
  public hoursToDday: number;
  public daysToDday: number;
  
  defaultImageDemande: string = './assets/img/professionnel/offre/mobile_course-demande_lazy.png';
  imageDemande: string = './assets/img/professionnel/offre/mobile_course-demande.png';
  defaultImageDisposition: string = './assets/img/professionnel/offre/livreur_lazy.png';
  imageDisposition: string = './assets/img/professionnel/offre/livreur.png';
  defaultImageBox: string = './assets/img/professionnel/offre/logo_woozooBox_lazy.png';
  imageBox: string = './assets/img/professionnel/offre/logo_woozooBox.png';

  constructor() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });
  }

  getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (1000) % 60);
    this.minutesToDday = Math.floor((timeDifference) / (1000 * 60) % 60);
    this.hoursToDday = Math.floor((timeDifference) / (1000 * 60 * 60) % 24);
    this.daysToDday = Math.floor((timeDifference) / (1000 * 60 * 60 * 24));
  }

}
