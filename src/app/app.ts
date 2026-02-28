// app.component.ts:

import { Component } from '@angular/core';
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
  styleUrl: './app.scss'
})

export class App {

}
