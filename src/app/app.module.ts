import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './adminPortal/admin-login/admin-login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { UnitMasterComponent } from './adminPortal/Master/unit-master/unit-master.component';
import { HeaderComponent } from './adminportal/components/header/header.component';
import { FooterComponent } from './adminportal/components/footer/footer.component';
import { MenuComponent } from './adminportal/components/menu/menu.component';
import { SettingComponent } from './adminportal/components/setting/setting.component';
import {MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const appRoutes: Routes=[
  { path: 'app-unit-master', component: UnitMasterComponent },
  { path:'', redirectTo: 'app-menu', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnitMasterComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingComponent
  ],
  imports: [
    HttpModule,    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule, MatSortModule,
BrowserAnimationsModule,
MatPaginatorModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
