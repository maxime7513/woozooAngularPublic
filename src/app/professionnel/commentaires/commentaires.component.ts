import { Component, OnInit } from '@angular/core';
import { CommentairesService } from 'src/app/services/commentaires.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.scss']
})
export class CommentairesComponent implements OnInit {
  clients: Array<{nom: string, enseigne: string, img: string, texte: string}>
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true};

  constructor(private data: CommentairesService) {
    this.clients = this.data.clients;
  }

  ngOnInit(): void {
  }

}
