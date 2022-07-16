import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animation';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SEOService } from './services/seo.service';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  // title = 'woozooAngular';
  title = 'got-prerender-demo';

  prepareRoute(outlet: RouterOutlet) { // animation router
    return outlet?.activatedRouteData?.['animation'];
  }

  constructor(private metaTagService: Meta, private router: Router, private activatedRoute: ActivatedRoute, private seoService: SEOService){}

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'author', content: 'Maxime Bleunven' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: 'https://www.woozoo.io/assets/img/woozoo-meta_img.png' },
      { charset: 'UTF-8' },
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
  }
}



