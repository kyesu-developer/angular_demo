import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import {  AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent,    canActivate: [AuthGuardService]     },
      {path:'logout',component:LogoutComponent},
      { path: '**', redirectTo: 'login' }

    ])
  ],
  providers: [AuthGuardService,FormsModule,ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
