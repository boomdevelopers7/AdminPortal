import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef< AddItemComponent>, @Inject(MAT_DIALOG_DATA)public data: string) { }


  ngOnInit() {
  }
  onCloseConfirm(){
    this.thisdialogRef.close('confirm');

  }

  onCloseCancel(){
    this.thisdialogRef.close('cancel');

  }

}