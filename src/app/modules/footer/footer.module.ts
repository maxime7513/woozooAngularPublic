import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from 'src/app/footer/footer.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required for LOTTIE
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    NgxPageScrollModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
