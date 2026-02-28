// burger-menu.component.ts:

import { Component, HostListener } from '@angular/core';
import {ROUTE_LINKS, BREAKPOINTS, currentYear, versionNum} from '../../Shared/constants';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
})

export class BurgerMenu {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;

    document.documentElement.style.overflow = this.isOpen ? 'hidden' : 'scroll';
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isOpen = false;
    document.documentElement.style.overflow = 'scroll';
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > BREAKPOINTS.MOBILE && this.isOpen) {
      this.closeMenu();
    }
  }

  protected readonly versionNum = versionNum;
  protected readonly currentYear = currentYear;
  protected readonly ROUTE_LINKS = ROUTE_LINKS;
}
