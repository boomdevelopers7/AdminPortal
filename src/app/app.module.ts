import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './adminPortal/admin-login/admin-login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import  'rxjs/add/operator/toPromise';
import {MatTableModule,MatCardModule, MatSnackBarModule, MatSortModule, MatPaginatorModule,
         MatDialogModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { UnitMasterComponent } from './adminPortal/Master/unit-master/unit-master.component';
import { HeaderComponent } from './adminportal/dashboard/header/header.component';
import { FooterComponent } from './adminportal/dashboard/footer/footer.component';
import { SettingComponent } from './adminportal/dashboard/setting/setting.component';
import { MenuComponent } from './adminPortal/Dashboard/Sidebar/menu.component';
import { ItemMasterComponent } from './adminPortal/Master/item-master/item-master.component';
import { AddItemComponent } from './adminPortal/Master/item-master/add-item/add-item.component';
import { AddUnitDataComponent } from './adminPortal/Master/unit-master/add-unit-data/add-unit-data.component';
// import { UpdateUnitDataComponent } from './adminPortal/Master/unit-master/update-unit-data/update-unit-data.component';
import { DeleteUnitDataComponent } from './adminPortal/Master/unit-master/delete-unit-data/delete-unit-data.component';
import { SupplierComponent } from './adminPortal/Master/supplier/supplier.component';
import { AddSupplierComponent } from './adminPortal/Master/supplier/add-supplier/add-supplier.component';
import { CustomerMasterComponent } from './adminPortal/Master/customer-master/customer-master.component';
import { AddCustomerComponent } from './adminPortal/Master/customer-master/add-customer/add-customer.component';
const appRoutes: Routes=[
  { path: 'app-unit-master', component: UnitMasterComponent },
  { path: 'app-item-master', component: ItemMasterComponent },
  { path: 'app-supplier', component: SupplierComponent },
  // { path: 'app-unit-master', component: UnitMasterComponent },
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
    AddUnitDataComponent,
    // UpdateUnitDataComponent,
    DeleteUnitDataComponent,
    SupplierComponent,
    AddSupplierComponent,
    CustomerMasterComponent,
    AddCustomerComponent
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
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule 
    
  ],
  entryComponents:[
    AddUnitDataComponent,
    // UpdateUnitDataComponent,
    DeleteUnitDataComponent,
    AddItemComponent,
    AddSupplierComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

