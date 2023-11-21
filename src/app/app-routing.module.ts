import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PairsComponent } from './modules/pairs/pairs.component';

const routes: Routes = [
  { path: 'app', children: [
    { path: '', redirectTo: 'pairs', pathMatch: 'full' },
    { path: 'pairs', component: PairsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
