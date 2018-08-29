import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { adminService } from "src/app/shared/admin.service";
import { admin } from "src/app/shared/admin.modal";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class LoginComponent implements OnInit {
admin : admin;
  constructor(private adminService : adminService) { }

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
    this.adminService.adminLogin(form.value)
    .subscribe((data: any)=>{
  if(data.statusText=="OK")
    this.resetForm(form);
    });
    
  }
}
