import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { ProfileService } from '../../shared_service/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  description: String = "";


  constructor( public aboutDialogRef: MatDialogRef<AboutComponent>, private profileService : ProfileService) { }

  ngOnInit() {
    this.description = this.profileService.getAbout();
  }

  onSubmit(){
    this.profileService.setAbout(this.description);
    this.profileService.initializeAbout(this.description);
    this.aboutDialogRef.close();

  }
  onCancel(){
    this.aboutDialogRef.close("");
  }

}
