import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/pages/login/login/login.component';
import { HomeComponent } from './features/home/pages/home/home.component';


export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent}
    


];
