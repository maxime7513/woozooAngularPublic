import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animation';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SEOService } from './services/seo.service';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = "Woozoo";
  imgPreloadTab : string[] = [
    "./assets/lottie/woozoo_loop.json",
    "./assets/img/home-page/logo-woozoo.png",
    "./assets/img/header/logo-woozoo.png",
    // professionnel
    "./assets/img/map.png",
    "./assets/img/professionnel/presentation/mockup-scoot.png",
    "./assets/img/professionnel/presentation/appMockup.png",
    "./assets/img/professionnel/offre/mobile_course-demande.png",
    "./assets/img/professionnel/offre/mobile_course-demande.png",
    "./assets/img/professionnel/offre/livreur.png",
    "./assets/img/professionnel/offre/logo_woozooBox.png",
    "./assets/img/noir-bleu_min.jpg",
    "./assets/img/professionnel/valeurs/securite.png",
    "./assets/img/professionnel/valeurs/rapide.png",
    "./assets/img/professionnel/valeurs/qualite.png",
    "./assets/img/professionnel/valeurs/equitable.png",
    "./assets/img/professionnel/secteurs/luxe.png",
    "./assets/img/professionnel/secteurs/sushi.png",
    "./assets/img/professionnel/secteurs/liberale.png",
    "./assets/img/professionnel/secteurs/double_arrow.png",
    // header
    "./assets/img/header/livreur.png",
    "./assets/img/header/sushi.png",
    "./assets/img/header/liberale_header.png",
    // coursier
    "/assets/img/coursier/phones.png",
    "./assets/img/coursier/mockup_csm/mockup_notification.png",
    "./assets/img/coursier/mockup_csm/mockup_coordonnees.png",
    "./assets/img/coursier/mockup_csm/mockup_recuperation.png",
    "./assets/img/coursier/mockup_csm/mockup_livraison.png",
    // professionnel clients
    "./assets/img/professionnel/partenaire/kyoSushi.png",
    "./assets/img/professionnel/partenaire/roseBaie.png",
    "./assets/img/professionnel/partenaire/blackPearlMusic.png",
    "./assets/img/professionnel/partenaire/homeStudio.png",
    // mise a disposition
    "./assets/img/professionnel/presentation/mockup-mise_a_disposition1.png",
    "./assets/img/professionnel/presentation/mockup-mise_a_disposition3.png",
    // background image homepage
    "./assets/img/background-video_img.jpg",
    // coursier
    "./assets/img/coursier/avantages/euro.svg",
    "./assets/img/coursier/avantages/calendrier.svg",
    "./assets/img/coursier/avantages/euro3.svg",
    "./assets/img/coursier/avantages/axa.png",
    "./assets/img/coursier/avantages/call-center.svg",
    "./assets/img/coursier/avantages/tenue.svg",
    // footer
    "./assets/img/footer/facebook.svg",
    "./assets/img/footer/instagram.svg",
    "./assets/img/footer/linkedin.svg",
    // secteur
    "./assets/img/professionnel/solutions/restaurant.png",
    "./assets/img/professionnel/solutions/luxe.png",
    "./assets/img/professionnel/solutions/liberale.png",
    "./assets/img/professionnel/solutions/inter-magasin.png",
    "./assets/img/professionnel/valeurs/efficace.png",
    "./assets/img/professionnel/valeurs/flexible.png",
    "./assets/img/professionnel/solutions/livreur.png"
  ]

  prepareRoute(outlet: RouterOutlet) { // animation router
    return outlet?.activatedRouteData?.['animation'];
  }

  constructor(private metaTagService: Meta, private router: Router, private activatedRoute: ActivatedRoute, private seoService: SEOService, private canonical: CanonicalService){}

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'author', content: 'Maxime Bleunven' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: './assets/img/woozoo-meta_img.png' },
      { charset: 'UTF-8' },
      { name: 'robots', content: 'index, follow' }
    ]);

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {
      let seoData = data['seo'];
      this.seoService.updateTitle(seoData['title']);
      this.seoService.updateMetaTags(seoData['metaTags']);
    });

    this.canonical.createCanonicalLink();
    
    this.preloadImages();
  }

  preloadImages(){
    this.imgPreloadTab.forEach(imgSrc => {
      let img = new Image();
      img.src = imgSrc
    })
  }

}



