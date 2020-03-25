import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ProfileService } from '../../shared_service/profile.service';



@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  data = {
    education: "",
    university: "",
    fromDate:"",
    toDate: "",
    description: ""
  
  }


  constructor( public educationDialogRef: MatDialogRef<EducationComponent>, private profileService: ProfileService) { }

  ngOnInit() {
  }
  save(){

    if(this.data.education !== "" && this.data.university !== "" 
        && this.data.fromDate !== "" && this.data.toDate !== "" && this.data.description !== ""){
      this.profileService.setEducation(this.data, (data)=>{
        this.educationDialogRef.close(data);
        if(data.success){
          this.educationDialogRef.close(this.data);
        }      
      });
    }else{
      this.educationDialogRef.close();      
    }

  }

}
