import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemMasterService } from '../../shared/services/master/item-master.service';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemMaster } from '../../shared/model/master/item.model';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DeleteItemComponent } from './delete-item/delete-item.component';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;// = new ItemMasterDataSource(this.itemmasterService); 
  
  displayedColumns = ['itemId','itemName', 'itemQuantity','unit','itemPrice'];

  constructor(private itemmasterservice: ItemMasterService,  public dialog: MatDialog) { }

  ngOnInit() {
this.itemmasterservice.getItemMaster().subscribe(result=>{
  this.dataSource=new MatTableDataSource(result);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
});
  }
  

   // dialog module
   dialogResult = "";
   onAddDialog() {
    let dialogRef = this.dialog.open(AddItemComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }onUpdateDialog() {
    let dialogRef = this.dialog.open( UpdateItemComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }onDeleteDialog() {
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

 