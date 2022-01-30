import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserResolverService} from './service/user-resolver.service';
import {UserNameFormComponent} from './user-name-form/user-name-form.component';
import {MailFormComponent} from './mail-form/mail-form.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'home/user/:username',
    pathMatch: 'full',
    component: UserDetailsComponent,
    resolve: {
      userDetails: UserResolverService
    }
  },
  { path: '', pathMatch: 'full', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
