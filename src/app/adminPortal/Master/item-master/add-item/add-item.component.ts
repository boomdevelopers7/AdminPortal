import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { Router } from '@angular/router';
import { UnitService } from '../../../shared/services/master/unit-master.service';
import { unitMaster } from '../../../shared/model/master/unit.model';
import { ItemMasterService } from '../../../shared/services/master/item-master.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(private itemmasterService: ItemMasterService,public snackBar: MatSnackBar,
    private unitService: UnitService,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.unitService.getUnitDataList().subscribe(data => this.units = data);
  }
  ngOnInit() {
    this.resetForm();
  }
  units: unitMaster[];
  selectUnit: number;
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.itemmasterService.selectItem)) {
      this.itemmasterService.selectItem = {
        itemId: 0,
        itemName: '',
        itemQuantity: '',
        itemUnit: '',
        itemPrice: null,
        unitId: null,
        unitMaster: null
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.itemmasterService.postItem(form.value)
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
  
}