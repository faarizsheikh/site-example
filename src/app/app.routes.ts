// app.routes.ts:

import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {Work} from './pages/work/work';
import {PageNotFound} from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: Home, title: 'Home'},
  { path: 'about', component: About, title: 'About' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'work', component: Work, title: 'Work' },
  { path: '**', component: PageNotFound, title: '404 - Page Not Found' }
];
