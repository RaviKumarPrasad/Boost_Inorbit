import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ProfileService } from '../../shared_service/profile.service';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  data = {
    designation: "",
    organisation: "",
    fromDate:"",
    toDate: "",
    description: ""
  
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  
  
  constructor( public experienceDialogRef: MatDialogRef<ExperienceComponent>, private profileService: ProfileService) { }

  ngOnInit() {
  }

  save(){

    if(this.data.designation !== "" && this.data.organisation !== "" 
        && this.data.fromDate !== "" && this.data.toDate !== "" && this.data.description !== ""){
      this.profileService.setExperience(this.data, (data)=>{
        this.experienceDialogRef.close(data);
        if(data.success){
          this.experienceDialogRef.close(this.data);
        }      
      });
    }else{
      this.experienceDialogRef.close();      
    }

  }
}
    

