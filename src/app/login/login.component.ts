import { UserData } from './../userData.service';
import { UsernameValidation } from './../commons/username.Validation';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form;
successMsg;
route;
  constructor(f:FormBuilder,private router: Router) {

  this.form = f.group({
    username:['',[Validators.required,
      Validators.minLength,
      Validators.maxLength,
      UsernameValidation.containsSpace,
      UsernameValidation.containsNumber,
      UsernameValidation.containsUppercase,
      UsernameValidation.containsLowercase,
      UsernameValidation.containsAllowedSpecialChars
    ]],
    password:['',Validators.required]
})
   }

  ngOnInit(): void {
    let user =  localStorage.getItem('user')
   if(user)
   this.router.navigate(['/home'])
  }
submit(){
  let list =  UserData.getListofUsers()
  let index = list.findIndex(item=>item.username == this.form.value.username && item.password ==this.form.value.password);
    if(index >= 0)
    {
        localStorage.setItem('user',JSON.stringify(list[index]));
        this.successMsg = true;
        return this.router.navigate(['/home']);
    } 
    this.form.setErrors({
      message:'Invalid username and/or password'
    })
}
key(f){
  console.log(f)
}
get username(){
  return this.form.get('username')
}
get password(){
  return this.form.get('password')
}
}
