import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
    state('void', style({ opacity: 0})),
    transition(':enter', [animate('750ms ease-in', style({ opacity: 1}))]),
    transition(':leave', [animate('300ms ease-out', style({ opacity: 0}))]),
]);

export const fadeInFromCenterAnimation = trigger('fadeInFromCenter', [
    state('void', style({ opacity: 0, transform: 'scaleY(0.5)' })),
    transition(':enter', [
      animate('2s 2s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'scaleY(1)' })),
    ]),
]);