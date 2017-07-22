import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FitbitauthComponent } from './fitbitauth/fitbitauth.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'authenticate', component: AuthenticateComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'fitbitauth', component: FitbitauthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthenticateComponent,
    RegisterComponent,
    DashboardComponent,
    FitbitauthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
