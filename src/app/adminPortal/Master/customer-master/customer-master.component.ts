import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../shared/services/master/customer.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { Customer } from '../../shared/model/master/customer.model';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})

export class CustomerMasterComponent implements OnInit {
  constructor(private customerservice: CustomerService,  public dialog: MatDialog,public snackBar: MatSnackBar) { }
  displayedColumns = ['custId', 'custName', 'custCity', 'custArea','custSociety','flat', 'custMobNo1','custMobNo2', 'update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.customerservice.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    let dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onUpdateDialog(item: Customer) {
    this.customerservice.selectCustomer = Object.assign({}, item);
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
  onDeleteDialog(item: Customer) {
    if (confirm('Are u sure') == true) {
      this.customerservice.Delete(item).subscribe(x => {
        this.ngOnInit();
        this.customerservice.getCustomerDataList();
      })
    }
  }
}


