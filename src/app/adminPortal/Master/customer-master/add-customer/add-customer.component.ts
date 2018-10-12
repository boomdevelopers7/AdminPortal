import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { CustomerMasterService } from '../../../shared/services/master/customer-master.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FlatMasterService } from '../../../shared/services/master/flat-master.service';
import { Router } from '@angular/router';
import { FlatMaster } from '../../../shared/model/master/flat-master.model';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  constructor(private customerMasterService: CustomerMasterService, 
    private flatService: FlatMasterService,public snackBar: MatSnackBar,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
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

  

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.customerMasterService.selectCustomer)) {
      this.customerMasterService.selectCustomer = {
        custId: 0,
        custName: '',
        custCity : '',
        custArea:'',
        custSociety:'',
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
