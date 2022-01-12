import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommentairesService } from 'src/app/services/commentaires.service';
import { IndexType } from 'typescript';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  dotNav: string;
  tabSliderPresentation : Array<string>;
  iSlider : any;
  commentaires: Array<{nom: string, enseigne: string, img: string, texte: string}>
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true};

  constructor(private data: CommentairesService) {
    this.dotNav = 'presentation1';
    this.tabSliderPresentation= ["presentation1", "presentation2", "presentation3"];
    this.iSlider = 1;
    this.commentaires = this.data.clients;
  }

  ngOnInit(): void {
    setInterval(() => { // slider presentation
      this.dotNav = this.tabSliderPresentation[this.iSlider];
      this.iSlider++;
      if(this.iSlider >= this.tabSliderPresentation.length){
        this.iSlider = 0;
      }
    }, 5000);
  }

}
