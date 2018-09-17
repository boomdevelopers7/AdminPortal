import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UnitService } from '../../shared/services/master/unit-master.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { AddUnitDataComponent } from './add-unit-data/add-unit-data.component';
import { UpdateUnitDataComponent } from './update-unit-data/update-unit-data.component';
import { DeleteUnitDataComponent } from './delete-unit-data/delete-unit-data.component';
// import { UnitMasterService } from '../../shared/services/unit-master.service';
import { unitMaster } from '../../shared/model/master/unit.model';

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource = new MatTableDataSource();

  displayedColumns = ['unitId', 'unitName', 'unitDescription','update','delete'];

  constructor( private UnitService: UnitService, public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.UnitService.loadData().subscribe(result => {
      console.log(result);
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
    let dialogRef = this.dialog.open(AddUnitDataComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  showForEdit(unit : unitMaster){
    console.log(unit);
    this.UnitService.selectUnit =Object.assign({},unit);
    
  }
  // update dialog
  onUpdateDialog() {
    let dialogRef = this.dialog.open(UpdateUnitDataComponent, {
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
    let dialogRef = this.dialog.open(DeleteUnitDataComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
}