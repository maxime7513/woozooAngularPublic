import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professionnel',
  templateUrl: './professionnel.component.html',
  styleUrls: ['./professionnel.component.scss']
})
export class ProfessionnelComponent implements OnInit {
  defaultImage: string = '/assets/img/bg_lazy.jpg';
  image: string = '/assets/img/map.png';
  constructor() {
  }

  ngOnInit(): void {
  }

}
