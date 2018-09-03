import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MatSort, MatSortable, MatTableDataSource, MatPaginator } from '@angular/material';

// import { MatTableDataSource, MatSort } from '@angular/material';
import { Unit } from "src/app/adminPortal/shared/modal/unit";
import { UnitMasterService } from '../../shared/services/unit-master.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  AllStatus : any=[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private unitMasterService : UnitMasterService){}
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
    this.unitMasterService.loadData().subscribe( result => {
    this.AllStatus=result;
    console.log(this.AllStatus);
    }); 
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort; 
}

}
