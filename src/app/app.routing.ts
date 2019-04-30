import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './_guards/home.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [HomeGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
  
  ];

  export const routing = RouterModule.forRoot(appRoutes);