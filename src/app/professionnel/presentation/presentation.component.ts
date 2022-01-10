import { Component, OnInit } from '@angular/core';
import { CommentairesService } from 'src/app/services/commentaires.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  dotNav: string;
  commentaires: Array<{nom: string, enseigne: string, img: string, texte: string}>
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true};

  constructor(private data: CommentairesService) {
    this.dotNav = 'presentation1';
    this.commentaires = this.data.clients;
  }

  ngOnInit(): void {
    let tab = ["presentation1", "presentation2", "presentation3"];
    let i = 1;
    setInterval(() => { // slider presentation
      this.dotNav = tab[i];
      i++;
      if(i>= tab.length){
        i = 0;
      }
    }, 5000);
  }

}
