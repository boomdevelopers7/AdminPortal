import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../shared/services/master/item.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Item } from  '../../shared/model/master/item.model';



@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {
  
  dataSource = new ItemDataSource(this.itemService);
  displayedColumns = ['itemId','itemName','itemQuantity','itemUnit','itemPrise'];


  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}


export class ItemDataSource extends DataSource<any>{
  constructor(private itemService: ItemService ) {
    super();
  }
  connect ():Observable <Item[]>{
    return this.itemService.getItem();
  }
  disconnect() {}
}
