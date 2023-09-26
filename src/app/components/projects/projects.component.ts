import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fadeInAnimation]
})
export class ProjectsComponent {

}
