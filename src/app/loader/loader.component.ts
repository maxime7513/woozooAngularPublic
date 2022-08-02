import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  options: AnimationOptions = {    
    path: '/assets/lottie/woozoo_loop.json',
    rendererSettings: {
      viewBoxSize: '60 200 600 600'
    }
  };
  constructor(private loaderService: LoaderService){
    this.loading = this.loaderService.loader;
  }

  ngOnInit(): void {
    this.loaderService.currentLoading.subscribe(value => (this.loading = value)); // Always get current value
  }

}
