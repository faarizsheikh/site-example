// burger-menu.component.ts:

import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {currentYear, versionNum, class_prefix, SOCIAL_LINKS, ROUTE_LINKS_ARRAY} from '../../Shared/constants';
import {RouterLink, RouterLinkActive} from '@angular/router';

type NavItem = {
  label: string;
  path: string;
};

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './burger-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './burger-menu.scss',
})

export class BurgerMenu {
  @Input() isOpen = false;

  protected readonly class_prefix = class_prefix;
  protected readonly currentYear = currentYear;
  protected readonly versionNum = versionNum;
  protected readonly SOCIAL_LINKS = SOCIAL_LINKS;
  protected readonly ROUTE_LINKS_ARRAY: NavItem[] = ROUTE_LINKS_ARRAY;
}
