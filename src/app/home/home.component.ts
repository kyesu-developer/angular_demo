import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin = false;
  form;
  user:any
  records=[]
  constructor() {
    this.form = new FormGroup({
      'name':new FormControl(),
      'message':new FormControl(),
    })
    
   }
  ngOnInit(): void {
   let userRecord =  localStorage.getItem('user')
   this.user = JSON.parse(userRecord);
   if(localStorage.getItem('records'))
   this.records = JSON.parse(localStorage.getItem('records'))  
  }
  showModal():void {
        $("#exampleModal").modal('show');
  }
  add(){
    this.records.push({
      'name':this.form.value.name,
      'message':this.form.value.message
    })
    localStorage.setItem('records',JSON.stringify(this.records))
    this.form.reset()
    $("#exampleModal").modal('hide');
  }
 
}
