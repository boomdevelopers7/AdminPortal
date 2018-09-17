import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnitService } from '../../../shared/services/master/unit-master.service';
// import { ToastrService } from 'ngx-toastr';
import { isEmptyObject } from 'jquery';
import {Router}  from '@angular/router';
@Component({
  selector: 'app-add-unit-data',
  templateUrl: './add-unit-data.component.html',
  styleUrls: ['./add-unit-data.component.css']
})
export class AddUnitDataComponent implements OnInit {

  constructor(private unitService : UnitService,private router: Router,private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.resetForm();

  }
  /******************Reset Form*********** */
resetForm(form? : NgForm){
  if(form != null)
  form.reset();
  if(isEmptyObject(this.unitService.selectUnit))
  {
  this.unitService.selectUnit={
    unitId:null,
    unitName :'',
    unitDescription:'',
  }
  }
}
/**************End Reset Form *************** */
msg:string=null;
/***********Insert Record******************** */

onSubmit(form : NgForm){
  this.unitService.postUnit(form.value)
  .subscribe(data=>{
    console.log("test ghjgjs dsajgdsjadgasjdgajs")
      this.router.navigate(['/app-unit-master']);
      // this.router.navigateByUrl('/app-unit-master');
this.msg='success';
   this.changeDetectorRefs.detectChanges();
    
    this.resetForm(form);
    // this.toastr.success('Record insert successfully', 'Unit register');
  })
}
/* ******* End Insert Record *************************/
}
