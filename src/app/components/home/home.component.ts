import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {
  showAnimation: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showAnimation = true;
    }, 3500);
  }
}
