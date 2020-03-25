import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LoginService  } from '../shared_service/auth_login/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  user = {
    email: "",
    password: ""
  }
  Total_Jobs: Number = 0;

  
  constructor( private dialog: MatDialog, private loginService : LoginService) { 

  }


  ngOnInit() {
    
  }

  onSubmit(){
     this.loginService.getLogin(this.user);
    
  }


}
