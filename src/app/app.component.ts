import { CanActivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'college';
  show = false;
 constructor(private authService:AuthGuardService){

 }
 ngOnInit(){
 }
 ngAfterContentChecked() {
 this.show =  this.authService.canActivate();
}      
}
