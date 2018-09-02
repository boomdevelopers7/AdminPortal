import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './adminPortal/admin-login/admin-login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatTableModule, MatSortModule} from '@angular/material';

import { DataSource } from '@angular/cdk/table';


import { UnitMasterComponent } from './itemMaster/unit-master/unit-master.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnitMasterComponent
  ],
  imports: [
    HttpModule,
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
