import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { CrudComponent } from './routes/crud/crud.component';
import { GalleryComponent } from './routes/gallery/gallery.component';
import { AboutusComponent } from './routes/aboutus/aboutus.component';
import { ProfileComponent } from './routes/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, data: {breadcrumb: 'login'}, children: []},
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'home'}, children: []},
  {path: 'dashboard', component: DashboardComponent, data: {breadcrumb: 'dashboard'}, children: []},
  {path: 'crud', component: CrudComponent, data: {breadcrumb: 'crud'}, children: []},
  {path: 'gallery', component: GalleryComponent, data: {breadcrumb: 'gallery'}, children: []},
  {path: 'profile', component: ProfileComponent, data: {breadcrumb: 'profile'}, children: []},
  {path: 'aboutus', component: AboutusComponent, data: {breadcrumb: 'aboutus'}, children: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
