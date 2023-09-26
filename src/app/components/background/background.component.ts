import { Component, OnInit } from '@angular/core';
import { fadeInFromCenterAnimation, fadeInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  animations: [fadeInFromCenterAnimation, fadeInAnimation]
})
export class BackgroundComponent implements OnInit {
  currentTime: string = '';
  showAnimation: boolean = false;

  constructor() {}
  
  ngOnInit() {
    setTimeout(() => {
      this.showAnimation = true;
    }, 4000);

    setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }
  
}
