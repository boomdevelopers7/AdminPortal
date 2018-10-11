import { Component, OnInit, ViewChild } from '@angular/core';
import { FlatMasterService } from '../../shared/services/master/flat-master.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FlatMaster } from '../../shared/model/master/flat-master.model';
import { AddFlatComponent } from './add-flat/add-flat.component';

@Component({
  selector: 'app-flat-master',
  templateUrl: './flat-master.component.html',
  styleUrls: ['./flat-master.component.css']
})
export class FlatMasterComponent implements OnInit {
  constructor(private flatMasterService: FlatMasterService,  public dialog: MatDialog) { }
  displayedColumns = ['flatId', 'flatNo','societyName','update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.flatMasterService.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    
    let dialogRef = this.dialog.open(AddFlatComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
 
  showForEdit(sup : FlatMaster){
    this.flatMasterService.selectFlat = Object.assign({},sup);
    let dialogRef = this.dialog.open(AddFlatComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

  onDeleteDialog(flat: FlatMaster) {
    if (confirm('Are u sure') == true) {
      this.flatMasterService.Delete(flat).subscribe(x => {
        this.ngOnInit();
        this.flatMasterService.getFlatDataList();
      })
    }
  }
}


