import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef  } from '@angular/material';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { Router } from '@angular/router';
import { AreaMasterService } from '../../../shared/services/master/area-master.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {

  constructor(private areamasterService: AreaMasterService, 
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddAreaComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    
  }
 
  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.areamasterService.selectArea)) {
      this.areamasterService.selectArea = {
        areaId: 0,
        areaName: ''
        
        
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.areamasterService.postArea(form.value)
      .subscribe(data => {
        this.msg = 'success';
        this.changeDetectorRefs.detectChanges();
        this.resetForm(form);
      })
  }
  onCloseConfirm() {
    this.thisdialogRef.close('conf irm');
  }

 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
