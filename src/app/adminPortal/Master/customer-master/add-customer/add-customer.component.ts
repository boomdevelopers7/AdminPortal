import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../../../shared/services/master/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit {
  constructor(private customerService: CustomerService, public snackBar: MatSnackBar,
    private flatService: FlatService,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.flatService.getFlatDataList().subscribe(data => this.flats = data);
  }
  ngOnInit() {
    this.resetForm();
  }
  flats: Flat[];
  selectUnit: number;

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.customerService.selectCustomer)) {
      this.customerService.selectCustomer = {
        custId: 0,
        custName: '',
        custCity:'',
        custArea: '',
        custSociety: '',
        custMobNo1:'',
        custMobNo2:'',
        flatId: null,
        flat: null
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.customerService.postICustomer(form.value)
      .subscribe(data => {
        this.msg = 'success';
        this.changeDetectorRefs.detectChanges();
        this.resetForm(form);
      })
  }
  onCloseConfirm() {
    this.thisdialogRef.close('conf irm');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open('Record Added Successfully', action, {
      duration: 2000,
    });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
