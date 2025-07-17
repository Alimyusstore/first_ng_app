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

export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'about', component: About},
    {path: 'signup', component: Signup},
    {path: 'to-do', component: ToDo},
    {path: 'counter', component: Counter},
    {path: 'ifelse', component: Ifelse},
    {path: 'switchcase', component: Switchcase},
    {path: 'contact', component: Contact},
    {path: 'component', component: Components},
];
