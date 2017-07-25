import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FitbitauthComponent } from './fitbitauth/fitbitauth.component';
import { LandingPageDetailsComponent } from './landing-page-details/landing-page-details.component';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../services/auth.guard';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'authenticate', component: AuthenticateComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'fitbitauth', component: FitbitauthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: LandingPageDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthenticateComponent,
    RegisterComponent,
    DashboardComponent,
    FitbitauthComponent,
    LandingPageDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
