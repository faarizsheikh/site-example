// page-not-found.component.ts:

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
})

export class PageNotFound {

}
