// page-not-found.component.ts:

import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ROUTE_LINKS} from '../../Shared/constants';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './page-not-found.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './page-not-found.scss',
})

export class PageNotFound {

  protected readonly ROUTE_LINKS = ROUTE_LINKS;
}
