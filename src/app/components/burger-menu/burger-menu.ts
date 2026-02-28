// burger-menu.component.ts:

import {Component, Input} from '@angular/core';
import {ROUTE_LINKS, currentYear, versionNum} from '../../Shared/constants';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
})

export class BurgerMenu {
  @Input() isOpen = false;

  protected readonly versionNum = versionNum;
  protected readonly currentYear = currentYear;
  protected readonly ROUTE_LINKS = ROUTE_LINKS;
}
