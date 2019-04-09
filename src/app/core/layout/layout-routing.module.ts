import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from '../login-layout/login-layout.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

const routes: Routes = [
{path: '', redirectTo: '/dashboard',pathMatch:'full'},
{path:'', component: LoginLayoutComponent, children:[
  {path: 'login', loadChildren: '../../login/login.module#LoginModule'},
  {path: 'registration', loadChildren: '../../registration/registration.module#RegistrationModule'}
]},

{path:'', component: MainLayoutComponent, children:[
  {path: 'dashboard', loadChildren: '../../dashboard/dashboard.module#DashboardModule'},
  {path: 'tasks', loadChildren: '../../tasks/tasks.module#TasksModule'},
  {path: 'milestones', loadChildren: '../../milestones/milestones.module#MilestonesModule'}
]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
