// footer.component.ts:

import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CONTACT_INFO,
  currentYear,
  NavItem,
  ROUTE_LINKS,
  ROUTE_LINKS_ARRAY,
  versionNum,
  WORKPAGE_LINKS
} from '../../Shared/constants';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.scss',
})

export class Footer {

  protected readonly currentYear = currentYear;
  protected readonly versionNum = versionNum;
  protected readonly CONTACT_INFO = CONTACT_INFO;
  protected readonly ROUTE_LINKS = ROUTE_LINKS;
  protected readonly WORKPAGE_LINKS = WORKPAGE_LINKS;
  protected readonly ROUTE_LINKS_ARRAY: NavItem[] = ROUTE_LINKS_ARRAY;
}
