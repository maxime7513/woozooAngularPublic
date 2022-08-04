import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoplayer:ElementRef;

  constructor(private loaderService: LoaderService) { }

  ngAfterViewInit(): void {
    this.checkImgLoad();
    this.checkVideoLoad();
  }

  ngOnInit(): void {
  }
  
  checkVideoLoad(){
    const video = this.videoplayer.nativeElement;
    video.oncanplay = () => {
      console.log('oncanplay')
      if(!video.paused){
        console.log('tourne deja')
        return
      }else{
        console.log('play')
        video.muted = true; // In chrome without this line it's not working although "muted" in HTML
        video.play();
        // video.play().then(() => {}).catch((error: any) => {
        //   video.setAttribute("controls", "controls");
        // });
      }
    };
  }

  checkPosterVideoLoad(){
    var posterVideo = this.videoplayer.nativeElement.getAttribute('poster')
    if(posterVideo){
      var image = new Image();
      image.src = posterVideo;
      image.onload = () => {
        this.loaderService.change();
      };
    }
  }

  checkImgLoad(){
    var image = new Image();
    image.src = '/assets/img/background-video_img.jpg';
    image.onload = () => {
      this.loaderService.change();
    };
  }

}
