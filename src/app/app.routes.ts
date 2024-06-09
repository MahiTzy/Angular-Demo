import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { authGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: DashboardComponent,
        title: 'Dashboard',
        canActivate: [authGuard]
    },
    {
        path: 'aboutus',
        component: AboutusComponent,
        title: 'About Us',
        canActivate: [authGuard]
    },
    {
        path: 'contactus',
        component: ContactComponent,
        title: 'Contact Us',
        canActivate: [authGuard]
    },
    {
        path: 'aboutusnew/:id',
        component: AboutusComponent,
        outlet: 'header' // Ensure this is intended for the named outlet 'header'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: '**',
        component: PagenotfoundComponent,
        title: 'Page Not Found'
    }
];
