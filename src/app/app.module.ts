import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './adminPortal/admin-login/admin-login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import  'rxjs/add/operator/toPromise';

import { UnitMasterComponent } from './adminPortal/Master/unit-master/unit-master.component';
import { HeaderComponent } from './adminportal/dashboard/header/header.component';
import { FooterComponent } from './adminportal/dashboard/footer/footer.component';
import { SettingComponent } from './adminportal/dashboard/setting/setting.component';
import {MatTableModule,MatCardModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './adminPortal/Dashboard/Sidebar/menu.component';
import { ItemMasterComponent } from './adminPortal/Master/item-master/item-master.component';
const appRoutes: Routes=[
  { path: 'app-unit-master', component: UnitMasterComponent },
  { path: 'app-item-master', component: ItemMasterComponent },
  { path: 'app-unit-master', component: UnitMasterComponent },
  { path:'', redirectTo: 'app-menu', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnitMasterComponent,
    ItemMasterComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingComponent,
    //UpdateUnitDataComponent,
    UnitMasterComponent
  ],
  imports: [
    HttpModule,    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule, MatSortModule,
BrowserAnimationsModule,
MatPaginatorModule,
MatCardModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
