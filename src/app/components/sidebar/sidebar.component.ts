import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('moveLeft', [
      state('active', style({ transform: 'translateX(0)'})),
      transition('void => active', [
        style({ transform: 'translateX(-98%)'}),
        animate('1.5s 4s ease-in-out')
      ])
    ])
  ]
})
export class SidebarComponent implements AfterViewInit {
  animationState: string = 'active';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationState = 'active';
    }, 2000);
  }

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
