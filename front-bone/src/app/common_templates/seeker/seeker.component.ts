import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../../shared_service/register/job_seeker/job-seeker.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {

  Job_Seeker = {  
    Firstname : "",
    Lastname:  "",
    Email:      "",
    Password:   "",
    Repassword: "",
    Nationality: "",
    ContactNumber:"",
  }


  constructor( private jobSeekerService: JobSeekerService ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.jobSeekerService.getRegister(this.Job_Seeker);
    
  }

}
