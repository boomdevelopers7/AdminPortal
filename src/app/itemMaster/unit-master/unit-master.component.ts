import { Component, OnDestroy, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

// import { MatTableDataSource, MatSort } from '@angular/material';
import { UnitMasterService } from "src/app/shared/unitMasterService/unit-master.service";

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent implements OnInit {
AllStatus : any=[];
displayedColumns = ['unitId', 'unitName', 'unitDescription'];
  constructor(private unitMasterService : UnitMasterService){}

  ngOnInit() {
    this.unitMasterService.loadData().subscribe( result => {
this.AllStatus=result;
console.log(this.AllStatus);
    }); 
  }

}
