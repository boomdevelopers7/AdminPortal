import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';

// import { MatTableDataSource, MatSort } from '@angular/material';
import { Unit } from "src/app/adminPortal/shared/modal/unit";
import { UnitMasterService } from '../../shared/services/unit-master.service';


@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent implements OnInit {

  dataSource ;
  displayedColumns: string[] = ['id', 'unitName', 'unitDescription'];
  constructor(private unitMasterService : UnitMasterService){}
  ngOnInit() {
    this.unitMasterService.loadData().subscribe( result => {
    this.dataSource=new MatTableDataSource(result);
    }); 
  }

}
  