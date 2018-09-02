import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Response } from '@angular/http';

import { admin } from "./admin.modal";

@Injectable({
  providedIn: 'root'
})

export class adminService {
  readonly rootUrl='http://localhost:4200';
  constructor(private http: HttpClient) { }
  adminLogin(admin : admin){           
    const body: admin={
      adminUserName : admin.adminUserName,
      adminPassword : admin.adminPassword
      }
       console.log(body);            
  return  this.http.post(this.rootUrl + '/api/Employee', body);
  }
}
