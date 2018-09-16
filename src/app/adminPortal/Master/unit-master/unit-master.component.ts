import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UnitService } from '../../shared/services/master/unit-master.service';

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent implements OnInit {

  constructor(private unitService : UnitService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form? : NgForm){
  if(form != null)
  form.reset();
  this.unitService.selectUnit={
    ID:null,
    unitName :'',
    unitDescription:'',
  }
}

onSubmit(form : NgForm){
  this.unitService.postUnit(form.value)
  .subscribe(data=>{
    this.resetForm(form);
    this.toastr.success('Record insert successfully', 'Unit register');
  })
}
}