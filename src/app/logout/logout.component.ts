import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { 
  }
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      localStorage.removeItem('user')
      this.router.navigate(['/login']);  
    }
  }

}
