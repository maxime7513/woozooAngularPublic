import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-csm',
  templateUrl: './csm.component.html',
  styleUrls: ['./csm.component.scss']
})
export class CsmComponent implements OnInit {
  csmEtape : string;
  cmsTab : Array<string>;
  iSlider : any;
  stopAutoplay : boolean;
  @ViewChild('imgMockup') imgMockup!: ElementRef;
  constructor() {
    this.csmEtape = 'notification';
    this.cmsTab = ['notification','coordonnees','recuperation','livraison'];
    this.iSlider = 1;
    this.stopAutoplay = false;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setInterval(() => { // autoplay changeEtape()
      if(!this.stopAutoplay){ 
        this.changeEtape(this.cmsTab[this.iSlider]);
        this.iSlider++;
        if(this.iSlider >= this.cmsTab.length){
          this.iSlider = 0;
        }
      }
    }, 5000);
  }

  changeEtape(el:string){
    this.csmEtape = el;
    this.imgMockup.nativeElement.src = '/assets/img/coursier/mockup_csm/mockup_'+ el +'.png';
    if(el == 'recuperation'){ // 2 images pour la meme etape
      setTimeout(() => {
        this.imgMockup.nativeElement.src = '/assets/img/coursier/mockup_csm/mockup_'+ el +'2.png';
      }, 2500);
    }else if(el == 'livraison'){ // 2 images pour la meme etape
      setTimeout(() => {
        this.imgMockup.nativeElement.src = '/assets/img/coursier/mockup_csm/mockup_'+ el +'2.png';
      }, 2500);
    }
  }

  changeBlokEtape(el: string){
    this.changeEtape(el);
    this.stopAutoplay = true; // arreter autoplay slider
  }

}
