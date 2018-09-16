import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';

import { ItemMasterService } from '../../shared/services/master/item-master.service';

import { DeleteItemComponent } from './delete-item/delete-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource();


  displayedColumns = ['itemId', 'itemName', 'itemQuantity', 'unit', 'itemPrice'];

  constructor(private itemmasterservice: ItemMasterService, public dialog: MatDialog) { }


// filtering material table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.itemmasterservice.getItemMaster().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      // sorting, paginator
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  // dialog module
  dialogResult = "";
  // add dialog
  onAddDialog() {
    let dialogRef = this.dialog.open(AddItemComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  // update dialog
  onUpdateDialog() {
    let dialogRef = this.dialog.open(UpdateItemComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  } 
  // delete dialog
  onDeleteDialog() {
    let dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
}

