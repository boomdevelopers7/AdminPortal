import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private toastr : ToastrService ,public thisdialogRef: MatDialogRef< AddItemComponent>, @Inject(MAT_DIALOG_DATA)public data: string) { }


  ngOnInit() {
  }
  onCloseConfirm(){
    this.thisdialogRef.close('confirm');

  }

  onCloseCancel(){
    this.thisdialogRef.close('cancel');

  }

}