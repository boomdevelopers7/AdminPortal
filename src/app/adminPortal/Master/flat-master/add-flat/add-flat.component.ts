import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FlatMasterService } from '../../../shared/services/master/flat-master.service';
import { SocietyMasterService } from '../../../shared/services/master/society-master.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SocietyMaster } from '../../../shared/model/master/society-master';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css']
})


export class AddFlatComponent implements OnInit {
  constructor(private flatMasterService: FlatMasterService, 
    private societyService: SocietyMasterService,public snackBar: MatSnackBar,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddFlatComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.societyService.getSocietyDataList().subscribe(data => this.societies = data);
  }
 
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open( 'New Record Added Successfully', action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.resetForm();
  }
  societies: SocietyMaster[];
  selectSociety: number;

  

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.flatMasterService.selectFlat)) {
      this.flatMasterService.selectFlat = {
        flatId: 0,
        flatNo: 0,
        societyId : null,
        SocietyMaster : null
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.flatMasterService.postflatMaster(form.value)
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

