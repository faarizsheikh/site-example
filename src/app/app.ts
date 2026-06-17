// app.component.ts:

import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {BurgerMenu} from './components/burger-menu/burger-menu';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    BurgerMenu,
    RouterOutlet
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})

export class App {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
