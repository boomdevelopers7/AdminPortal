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
import {MatTableModule,MatCardModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './adminPortal/Dashboard/Sidebar/menu.component';
import { ItemMasterComponent } from './adminPortal/Master/item-master/item-master.component';
import { AddItemComponent } from './adminPortal/Master/item-master/add-item/add-item.component';
import { UpdateItemComponent } from './adminPortal/Master/item-master/update-item/update-item.component';
import { DeleteItemComponent } from './adminPortal/Master/item-master/delete-item/delete-item.component';
import { AddUnitDataComponent } from './adminPortal/Master/unit-master/add-unit-data/add-unit-data.component';
import { UpdateUnitDataComponent } from './adminPortal/Master/unit-master/update-unit-data/update-unit-data.component';
import { DeleteUnitDataComponent } from './adminPortal/Master/unit-master/delete-unit-data/delete-unit-data.component';
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
    UnitMasterComponent,
    AddItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
    AddUnitDataComponent,
    UpdateUnitDataComponent,
    DeleteUnitDataComponent
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
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
    MatDialogModule
    
  ],
  entryComponents:[
    AddUnitDataComponent,
    UpdateUnitDataComponent,
    DeleteUnitDataComponent,
    AddItemComponent,
    UpdateItemComponent,
    DeleteItemComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
