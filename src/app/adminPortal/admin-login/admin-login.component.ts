import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { adminService } from '../shared/services/admin.service';
import { admin } from '../shared/services/admin.modal';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class LoginComponent implements OnInit {
admin : admin;
  constructor(private adminService : adminService, public router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
    form.reset();
    this.admin ={
adminUserName : '',
adminPassword :''
    }
  }

  onLogin(form : NgForm){
    this.router.navigate(['/Admin']);
  //   this.adminService.adminLogin(form.value)
  //   .subscribe((data: any)=>{
  // if(data.statusText=="OK")
  //   this.resetForm(form);
  //   });
    
  }
}
