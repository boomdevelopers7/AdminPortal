import { Component, OnInit } from '@angular/core';
import { unitMaster } from '../../../shared/model/master/unit.model';
import { UnitService } from '../../../shared/services/master/unit-master.service';

@Component({
  selector: 'app-update-unit-data',
  templateUrl: './update-unit-data.component.html',
  styleUrls: ['./update-unit-data.component.css']
})
export class UpdateUnitDataComponent implements OnInit {
selectUnit: unitMaster;
  constructor(private unitService : UnitService) { }

  ngOnInit() {
  }
 
}
