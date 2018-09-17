import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnitService } from '../../../shared/services/master/unit-master.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-unit-data',
  templateUrl: './add-unit-data.component.html',
  styleUrls: ['./add-unit-data.component.css']
})
export class AddUnitDataComponent implements OnInit {

  constructor(private unitService : UnitService, private toastr : ToastrService) { }

  ngOnInit() {
   // this.resetForm();

  }
  /******************Reset Form*********** */
resetForm(form? : NgForm){
  if(form != null)
  form.reset();
  this.unitService.selectUnit={
    unitId:null,
    unitName :'',
    unitDescription:'',
  }
}
/**************End Reset Form *************** */

/***********Insert Record******************** */
onSubmit(form : NgForm){
  this.unitService.postUnit(form.value)
  .subscribe(data=>{
    this.resetForm(form);
    this.toastr.success('Record insert successfully', 'Unit register');
  })
}
/* ******* End Insert Record *************************/
}
