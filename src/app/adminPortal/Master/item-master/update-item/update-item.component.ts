import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<  UpdateItemComponent>, @Inject(MAT_DIALOG_DATA)public data: string) { }


  ngOnInit() {
  }
  onCloseConfirm(){
    this.thisdialogRef.close('confirm');

  }

  onCloseCancel(){
    this.thisdialogRef.close('cancel');

  }

}
