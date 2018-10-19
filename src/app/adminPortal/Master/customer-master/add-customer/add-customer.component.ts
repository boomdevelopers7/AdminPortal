import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { CustomerMasterService } from '../../../shared/services/master/customer-master.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FlatMasterService } from '../../../shared/services/master/flat-master.service';
import { Router } from '@angular/router';
import { FlatMaster } from '../../../shared/model/master/flat-master.model';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { cityMasterService } from '../../../shared/services/master/cityMaster.service';
import { AreaMasterService } from '../../../shared/services/master/area-master.service';
import { SocietyMasterService } from '../../../shared/services/master/society-master.service';
import { AreaMaster } from '../../../shared/model/master/area-master';
import { cityMaster } from '../../../shared/model/master/city.model';
import { SocietyMaster } from '../../../shared/model/master/society-master';
declare var $:any;

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  constructor(private customerMasterService: CustomerMasterService,private cityService : cityMasterService, private areaService : AreaMasterService,
    private societyService  : SocietyMasterService,
    private flatService: FlatMasterService,public snackBar: MatSnackBar,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
      this.cityService.getcityDataList().subscribe(data => this.cities = data);
      this.areaService.getAreaDataList().subscribe(data => this.areas = data);
      this.societyService.getSocietyDataList().subscribe(data => this.societis = data);
      this.flatService.getFlatDataList().subscribe(data => this.flats = data);

  }
 
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open( 'New Record Added Successfully', action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.resetForm();
  }
  
  flats: FlatMaster[];
  selectFlat: number;

  areas : AreaMaster[];
  selectArea:number;

  cities : cityMaster[];
  selectCity:number;

  societis : SocietyMaster[];
  selectSociety : number;
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.customerMasterService.selectCustomer)) {
      this.customerMasterService.selectCustomer = {
        custId: 0,
        custName: '',
        cityId : 0,
        areaId:0,
        societyId:0,
        custMobNo1:'',
        custMobNo2:'',
        custGeoLocation:'',

        flatId : null,
        FlatMaster : null
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.customerMasterService.postCustomerMaster(form.value)
      .subscribe(data => {
        this.ngOnInit();
        this.msg = 'success';
        this.changeDetectorRefs.detectChanges();
        this.resetForm(form);
      })
  }
  onCloseConfirm() {
    this.thisdialogRef.close('confirm');
  }

 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}



  
  