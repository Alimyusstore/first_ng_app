import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Signup } from './signup/signup';
import { Counter } from './counter/counter';
import { ToDo } from './to-do/to-do';
import { Ifelse } from './ifelse/ifelse';
import { Switchcase } from './switchcase/switchcase';
import { Components } from './component/component';
import { Home } from './home/home';
import { Page404 } from './page404/page404';
import { User } from './user/user';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((c) => c.About),
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup').then((c) => c.Signup),
  },
  {
    path: 'to-do',
    loadComponent: () => import('./to-do/to-do').then((c) => c.ToDo),
  },
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter').then((c) => c.Counter),
  },
  {
    path: 'ifelse',
    loadComponent: () => import('./ifelse/ifelse').then((c) => c.Ifelse),
  },
  {
    path: 'switchcase',
    loadComponent: () =>
      import('./switchcase/switchcase').then((c) => c.Switchcase),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((c) => c.Contact),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then((c) => c.Profile),
  },
  {
    path: 'component',
    loadComponent: () =>
      import('./component/component').then((c) => c.Components),
  },

  { path: 'profile', component: Profile, data: { age: '28' } },
  { path: 'user/:id/:name', component: User },

  { path: '**', component: Page404 },
];
