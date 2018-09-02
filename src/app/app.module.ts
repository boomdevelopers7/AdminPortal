import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './adminPortal/admin-login/admin-login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { UnitMasterComponent } from './itemMaster/unit-master/unit-master.component';
import { HeaderComponent } from './adminportal/components/header/header.component';
import { FooterComponent } from './adminportal/components/footer/footer.component';
import { MenuComponent } from './adminportal/components/menu/menu.component';
import { SettingComponent } from './adminportal/components/setting/setting.component';
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
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
