import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './_guards/home.guard';
import { ChecklistComponent } from './home/checklist/checklist.component';
import { TablesdbComponent } from './home/tablesdb/tablesdb.component';


// определение дочерних маршрутов
const itemRoutes: Routes = [
  { path: 'checklist', component: ChecklistComponent },
  { path: 'tablesdb', component: TablesdbComponent }
];

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [HomeGuard] },
  { path: 'home', component: HomeComponent,  children: itemRoutes },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }

];

export const routing = RouterModule.forRoot(appRoutes);