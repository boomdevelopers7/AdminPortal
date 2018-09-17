import { UnitMasterComponent } from "../../../Master/unit-master/unit-master.component";
import { unitMaster } from '../../model/master/unit.model';

export class ItemMaster {

    itemId : number;
    itemName : string;
    itemQuantity : string;
    itemUnit : string;
    itemPrice :number;
    unitMaster: unitMaster;
}

