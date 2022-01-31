import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomePageComponent} from './home-page/home-page.component';
import {UserNameFormComponent} from './user-name-form/user-name-form.component';
import {MailFormComponent} from './mail-form/mail-form.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {UserService} from './service/user.service';
import {UserResolverService} from './service/user-resolver.service';
import {HttpClientModule} from '@angular/common/http';
import {UserForm} from './service/user-form.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserNameFormComponent,
    MailFormComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [UserService, UserResolverService, UserForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
