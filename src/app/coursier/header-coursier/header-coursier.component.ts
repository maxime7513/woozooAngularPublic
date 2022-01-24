import { Component, HostListener, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-header-coursier',
  templateUrl: './header-coursier.component.html',
  styleUrls: ['./header-coursier.component.scss']
})
export class HeaderCoursierComponent implements OnInit {
  scrolled: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() { // classe active sur header au scroll
    this.scrolled = window.scrollY > 50;
  };
  constructor(private PopupLivraisonService: PopupService) { }

  ngOnInit(): void {
  }

  scroll(el: string, reglageHeight: number){ // function scroll
    let y = (document.getElementById(el) as HTMLElement).offsetTop;
    window.scrollTo({top: y - reglageHeight, behavior: 'smooth'});
  }

  openPopupFormulaireContact(){
    this.PopupLivraisonService.openPopupFormulaireContact();
  }

}
