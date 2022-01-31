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
    path: 'home/step1',
    pathMatch: 'full',
    component: UserNameFormComponent
  },
  {
    path: 'home/step2',
    pathMatch: 'full',
    component: MailFormComponent
  },
  {
    path: 'home/:username',
    pathMatch: 'full',
    component: UserDetailsComponent,
    resolve: {
      userDetails: UserResolverService
    }
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
