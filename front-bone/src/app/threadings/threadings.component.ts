
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared_service/profile.service';


@Component({
  selector: 'app-threadings',
  templateUrl: './threadings.component.html',
  styleUrls: ['./threadings.component.css']
})
export class ThreadingsComponent implements OnInit {

  profilePicture: String = "/assets/images/profile_icon.png";
  
  constructor(private profileService: ProfileService ) { }

  ngOnInit() {
    this.profileService.UserAllInfo((doc)=>{
      if(doc.data.profilePicture !== ""){
        this.profilePicture = doc.data.profilePicture;
        this.profileService.initializeProfilePicture(this.profilePicture);
      }
    });
  }
}
