import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/pages/login/login/login.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ViewProfileComponent } from './features/profile/pages/view-profile/view-profile.component';
import { SignUpComponent } from './auth/login/pages/sign-up/sign-up/sign-up.component';
import { EditProfileComponent } from './features/profile/pages/edit-profile/edit-profile.component';
import { CreatePropertyComponent } from './features/properties/pages/create-property/create-property.component';
import { EditPropertyComponent } from './features/properties/pages/edit-property/edit-property.component';
import { ViewPropertyComponent } from './features/properties/pages/view-property/view-property.component';
import { SearchPropertyComponent } from './features/search/page/search-property/search-property.component';


export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'sign_up', component: SignUpComponent },
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ViewProfileComponent},
    {path: 'edit_profile', component: EditProfileComponent},
    {path: 'create_property', component: CreatePropertyComponent},
    {path: 'edit_property', component: EditPropertyComponent},
    {path: 'view_property', component: ViewPropertyComponent},
    {path: 'search', component: SearchPropertyComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
    


];
