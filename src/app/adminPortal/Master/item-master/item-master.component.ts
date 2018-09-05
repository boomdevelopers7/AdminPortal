import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemMasterService } from '../../shared/services/master/item-master.service';

import { ItemMaster } from '../../shared/model/master/item.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  dataSource;// = new ItemMasterDataSource(this.itemmasterService); 
  
  displayedColumns = ['itemId','itemName', 'itemQuantity','unit','itemPrice'];

  constructor(private itemmasterservice: ItemMasterService) { }

  ngOnInit() {
this.itemmasterservice.getItemMaster().subscribe(result=>{
  this.dataSource=new MatTableDataSource(result)});
  }
  

}

 