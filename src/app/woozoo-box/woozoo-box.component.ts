import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woozoo-box',
  templateUrl: './woozoo-box.component.html',
  styleUrls: ['./woozoo-box.component.scss']
})
export class WoozooBoxComponent implements OnInit {
  timer: number = 5;
  constructor(private router: Router) { }

  ngOnInit(): void {
    var myInterval = setInterval(()=> {
      this.timer--
      if(this.timer == 0){
        this.router.navigate(['']);
        clearInterval(myInterval);
      }
    }, 1000);

  }

}
