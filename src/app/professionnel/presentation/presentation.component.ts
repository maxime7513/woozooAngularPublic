import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommentairesService } from 'src/app/services/commentaires.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {
  dotNav: string;
  tabSliderPresentation : Array<string>;
  iSlider : any;
  private subscription: Subscription;
  // commentaires: Array<{nom: string, enseigne: string, img: string, texte: string}>
  // slideConfig = {
  //   "slidesToShow": 3,
  //   "slidesToScroll": 1,
  //   "autoplay": true,
  //   "arrows": false,
  //   responsive: [
  //     {
  //       breakpoint: 801,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 1251,
  //       settings: {
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // };
  defaultImage1: string = './assets/img/professionnel/presentation/mockup-scoot_lazy.png';
  image1: string = './assets/img/professionnel/presentation/mockup-scoot.png';
  defaultImage2: string = './assets/img/professionnel/presentation/appMockup_lazy.png';
  image2: string = './assets/img/professionnel/presentation/appMockup.png';

  constructor(private data: CommentairesService) {
    this.dotNav = 'presentation1';
    this.tabSliderPresentation= ["presentation1", "presentation2"];
    this.iSlider = 1;
    // this.commentaires = this.data.clients;
  }

  ngOnInit(): void {
    this.subscription = interval(5000)
    .subscribe(x => { this.sliderAuto(); });
  }

  sliderAuto(){
    this.dotNav = this.tabSliderPresentation[this.iSlider];
    this.iSlider++;
    if(this.iSlider >= this.tabSliderPresentation.length){
      this.iSlider = 0;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
