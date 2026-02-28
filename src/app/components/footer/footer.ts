// footer.component.ts:

import { Component } from '@angular/core';
import {currentYear, ROUTE_LINKS, versionNum} from '../../Shared/constants';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})

export class Footer {
  protected readonly currentYear = currentYear;
  protected readonly versionNum = versionNum;
  protected readonly ROUTE_LINKS = ROUTE_LINKS;
}
