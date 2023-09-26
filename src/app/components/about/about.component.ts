import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInAnimation]
})
export class AboutComponent {

}
