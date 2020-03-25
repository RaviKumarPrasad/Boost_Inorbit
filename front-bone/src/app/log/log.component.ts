
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CareerComponent } from '../common_templates/career/career.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CollectionsComponent } from '../common_templates/collections/collections.component';
import { ProListComponent } from '../common_templates/pro-list/pro-list.component';
import { ForkComponent } from '../fork/fork.component';
import { AboutComponent } from '../common_templates/about/about.component';
import { PastDesignationsComponent } from '../common_templates/past-designations/past-designations.component';
import { SkillsComponent } from '../common_templates/skills/skills.component';
import { ProfilePictureComponent } from '../common_templates/profile-picture/profile-picture.component';
import { BackgroundPictureComponent } from '../common_templates/background-picture/background-picture.component';
import { FileSelectorComponent } from '../Popups/file-selector/file-selector.component';
import { SimpleTextComponent } from '../Popups/simple-text/simple-text.component';
import { VideoRecordingComponent } from '../Popups/video-recording/video-recording.component';
import { ExperienceComponent } from '../Popups/experience/experience.component';
import { EducationComponent } from '../Popups/education/education.component';
import { ReusableComponent } from '../reuseComponents/reusable/reusable.component';

import { ProfileService } from '../shared_service/profile.service';
import { element } from 'protractor';

import {TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  private name: String = "";
  private exclusion_name: String = "";
  // positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position: TooltipPosition = 'right';
  description: String = "";
  profilePicture: String = "/assets/images/profile_icon.png";
  backgroundPicture: String = "/assets/images/profile_icon.png";
  past_designation: String = "Past Designations";
  skills: String = "";

  numberOfExclusions: Number = 0;
  src1:string = "";
  src2:string = "";
  src3:string = "";
  src4:string = "";
  src5:string = "";
  src6:string = "";
  src7:string = "";
  src8:string = "";
  src9:string = "";

  document;

  is_hidden_request: boolean = true;
  is_hidden_career: boolean = true;
  is_hidden_activity: boolean = false;
  is_hidden_post:     boolean = true;
  is_hidden_proList: boolean = false;
  is_clicked : boolean = true;
  css_conditional: boolean = true;
  is_expContent_visible = false;
  is_expHeader_visible = false;
  is_eduHeader_visible = false;
  is_eduContent_visible = false;


  constructor( private dialog: MatDialog, private profileService: ProfileService ) {

  }

  ngOnInit() {
    this.profileService.UserAllInfo((doc)=>{
      if(doc.data.name !== "" ){
        this.name = doc.data.name;

      }
      if(doc.data.about !== ""){
        this.description = doc.data.about;
        this.profileService.initializeAbout(this.description);

      }
      if(doc.data.profilePicture !== ""){
        this.profilePicture = doc.data.profilePicture;
        this.profileService.initializeProfilePicture(this.profilePicture);
      }
      if(doc.data.backgroundPicture !== ""){
        this.backgroundPicture = doc.data.backgroundPicture;
        this.profileService.initializeBackgroundPicture(this.backgroundPicture);
      }
      if(doc.data.profileAlbum !== ""){
        this.profileService.initializeProfileAlbum(doc.data.profileAlbum);

      }
      if(doc.data.BackgroundAlbum !== ""){
        this.profileService.initializeProfileAlbum(doc.data.BackgroundAlbum);

      }
    // this.document = this.profileService.getUserAllInfo();
    // console.log(this.document);
      // if(doc.data.profileAlbum !== ""){
      //   const album = this.profileService.getProfileAlbum();

      //   this.src1 = album[0]['content'];
      //   this.src2 = album[1]['content'];
      //   this.src3 = album[2]['content'];
      //   this.src4 = album[3]['content'];
      //   this.src5 = album[4]['content'];
      //   this.src6 = album[5]['content'];
      //   this.src7 = album[6]['content'];
      //   this.src8 = album[7]['content'];
      //   this.src9 = album[8]['content'];
      // }
    });



  }

  createProfilePicture(){
    const profilePictureConfig = new MatDialogConfig();
    profilePictureConfig.backdropClass = "dropBackColor";
    profilePictureConfig.disableClose = true;
    profilePictureConfig.height = "90%";
    profilePictureConfig.width = "99%";

    let profilePictureDialog = this.dialog.open( ProfilePictureComponent , profilePictureConfig );

    profilePictureDialog.afterClosed().subscribe( (result)=> {
      if(result !== ""){
        this.profileService.initializeProfilePicture( result );
        this.profilePicture = result;
      }

    });

  }
  createBackgroundPicture(){
    const backgroungPictureConfig = new MatDialogConfig();
    backgroungPictureConfig.backdropClass = "dropBackColor";
    backgroungPictureConfig.disableClose = true;

    backgroungPictureConfig.height = "90%";
    backgroungPictureConfig.width = "99%";

    let backgroungPictureDialog = this.dialog.open( BackgroundPictureComponent , backgroungPictureConfig );

    backgroungPictureDialog.afterClosed().subscribe( (result)=> {
      if(result !== ""){
        this.profileService.initializeBackgroundPicture( result );
        this.backgroundPicture = result;
      }
    });


  }





}
