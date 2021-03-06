import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CustomerMasterService } from '../../shared/services/master/customer-master.service';
import { CustomerMaster } from '../../shared/model/master/customer.model';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent implements OnInit {
  constructor(private customerMasterService: CustomerMasterService,  public dialog: MatDialog) { }
  displayedColumns = ['custId', 'custName','cityId','areaId','societyId','flatNo','custMobNo1','custMobNo2','custGeoLocation','update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.customerMasterService.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    this.customerMasterService.selectCustomer =null;
    let dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
 
  showForEdit(sup : CustomerMaster){
    this.customerMasterService.selectCustomer = Object.assign({},sup);
    let dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

  onDeleteDialog(cust: CustomerMaster) {
    if (confirm('Are u sure') == true) {
      this.customerMasterService.Delete(cust).subscribe(x => {
        this.ngOnInit();
        this.customerMasterService.getCustomerDataList();
      })
    }
  }
}


