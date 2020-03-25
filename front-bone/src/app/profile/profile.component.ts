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

import { ProfileModule } from './profile.module';

import { ProfileService } from '../shared_service/profile.service';
import { element } from 'protractor';

import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector : 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})





export class ProfileComponent implements OnInit {

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

  proListFunction($event){
    this.is_hidden_proList = !this.is_hidden_proList;
    if(this.is_hidden_activity == true){
      this.is_hidden_activity = !this.is_hidden_activity;
    }

    if( this.is_hidden_career == true ){
      this.is_hidden_career   = !this.is_hidden_career;
    }

  }

  careerFunction($event){
    this.is_hidden_career = !this.is_hidden_career;
    if(this.is_hidden_activity == true){
      this.is_hidden_activity = !this.is_hidden_activity;
    }

    if( this.is_hidden_proList == true){
      this.is_hidden_proList  = !this.is_hidden_proList;
    }

  }

  activityFunction(){

    this.is_hidden_activity = !this.is_hidden_activity;

    if(this.is_hidden_career == true){
      this.is_hidden_career  = !this.is_hidden_career;
    }

    if(this.is_hidden_proList ){
      this.is_hidden_proList = !this.is_hidden_proList;
    }

  }

  getColor(){
    return this.is_clicked == true ? "rgb(219, 196, 146)" : "#ddd";
  }

  getBackgroundColor(){
    return this.is_clicked == true ? "rgb(219, 196, 146)" : "#f28500";
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
  classReset(){
    const body_reset = document.getElementById('body_not_transparent');
    body_reset.removeAttribute('class'); 

  }

  createExperience(){
    const expConfig = new MatDialogConfig();
    expConfig.backdropClass = "dropBackColor";
    expConfig.panelClass = 'panelClass'
    // expConfig.disableClose = true;
    expConfig.minHeight = "80%";
    expConfig.minWidth = "50%";
    expConfig.height = "80%";
    expConfig.width = "50%";
    expConfig.maxHeight = "80%";
    expConfig.maxWidth = "50%";

    const body = document.getElementById('body_not_transparent');
    body.className = 'body_transparency'

    const expDialog = this.dialog.open(ExperienceComponent, expConfig);
    this.is_expHeader_visible = true;
    this.is_expContent_visible = true;    
    expDialog.afterClosed().subscribe((data)=>{
      if(data && data.designation !== "" && data.organisation !== "" 
        && data.fromDate !== "" && data.toDate !== "" && data.description !== ""){
        try{
          this.fillExperience(data);
          this.classReset();
  
        }catch{
          this.is_expHeader_visible  = false;
          this.is_expContent_visible = false;    
        }
      }else{
        this.is_expHeader_visible  = false;
        this.is_expContent_visible = false;
          
      }
    });
    

  }

  fillExperience(data){
    
    let expHeader = document.getElementById('expHeader');
    
    let matCardTitle = expHeader.getElementsByClassName('mat-card-title');
    matCardTitle[0].innerHTML = data.designation;
 
    let matIcon = document.getElementById('editExperience');
    matIcon.click;

    let matCardSubTitle = expHeader.getElementsByClassName('mat-card-subtitle');
    console.log();
    matCardSubTitle[0].getElementsByClassName('orgName')[0].innerHTML = data.organisation;
    matCardSubTitle[0].getElementsByClassName('startDate')[0].innerHTML = this.DateFormat(data.fromDate);
    matCardSubTitle[0].getElementsByClassName('lastDate')[0].innerHTML = this.DateFormat(data.toDate);
   
    let expContent = document.getElementById('expContent');
    expContent.innerHTML = '<p>'+data.description +'</p>'

    let expHeader1  = expHeader.cloneNode(true);
    let expContent1 = expContent.cloneNode(true); 

    let experienceCard = document.getElementById('experience-card'); 
    experienceCard.appendChild(expHeader1);
    experienceCard.appendChild(expContent1);

    this.is_expHeader_visible  = false;
    this.is_expContent_visible = false;    


  }
  parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;

    return t.content.cloneNode(true);
  }

  DateFormat(str) {
    var date = new Date(str),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, month, date.getFullYear()].join("/");
  }
  
  createEducation(){
    const expConfig = new MatDialogConfig();
    expConfig.backdropClass = "dropBackColor";
    expConfig.panelClass = 'panelClass'
    // expConfig.disableClose = true;
    expConfig.minHeight = "80%";
    expConfig.minWidth = "50%";
    expConfig.height = "80%";
    expConfig.width = "50%";
    expConfig.maxHeight = "80%";
    expConfig.maxWidth = "50%";

    const body = document.getElementById('body_not_transparent');
    body.className = 'body_transparency'

    const expDialog = this.dialog.open(EducationComponent, expConfig);
    this.is_eduHeader_visible  = true;
    this.is_eduContent_visible = true;
    expDialog.afterClosed().subscribe((data)=>{
      console.log(data);
      if(data && data.education !== "" && data.university !== "" 
        && data.fromDate !== "" && data.toDate !== "" && data.description !== ""){
        try{
          this.fillEducation(data);
          this.classReset();
  
        }catch{
          this.is_eduHeader_visible  = false;
          this.is_eduContent_visible = false;    
        }
      }else{
        this.is_eduHeader_visible  = false;
        this.is_eduContent_visible = false;
          
      }

    });

  }

  fillEducation(data){
    let eduHeader = document.getElementById('eduHeader');
    console.log(eduHeader);
    
    let matCardTitle = eduHeader.getElementsByClassName('mat-card-title');
    matCardTitle[0].innerHTML = data.education;
    console.log(matCardTitle);
 
    let matIcon = document.getElementById('editEducation');
    matIcon.click;
    console.log(matIcon);

    let matCardSubTitle = eduHeader.getElementsByClassName('mat-card-subtitle');
    console.log(matCardSubTitle);
    matCardSubTitle[0].innerHTML = data.university;
    matCardSubTitle[1].getElementsByClassName('startDate')[0].innerHTML = this.DateFormat(data.fromDate);
    matCardSubTitle[1].getElementsByClassName('lastDate')[0].innerHTML = this.DateFormat(data.toDate);
   
    let eduContent = document.getElementById('eduContent');
    eduContent.innerHTML = '<p>'+data.description +'</p>'

    let eduHeader1  = eduHeader.cloneNode(true);
    let eduContent1 = eduContent.cloneNode(true); 

    let educationCard = document.getElementById('education-card'); 
    educationCard.appendChild(eduHeader1);
    educationCard.appendChild(eduContent1);

    this.is_eduHeader_visible  = false;
    this.is_eduContent_visible = false;    


  }
  

  createCollection(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.backdropClass = "dropBackColor";
    dialogConfig.disableClose = true;
    dialogConfig.height = "90%";
    dialogConfig.width = "90%";

    // this.is_hidden_proList = !this.is_hidden_proList;
    // this.is_hidden_post = !this.is_hidden_post;

    this.dialog.open(CollectionsComponent, dialogConfig );
  }

  createProList(){
    const proListConfig = new MatDialogConfig();
    proListConfig.height = "90%";
    proListConfig.width = "90%";

    this.dialog.open(ProListComponent,proListConfig );

  }

  createFork(){
    const proListConfig = new MatDialogConfig();
    proListConfig.height = "90%";
    proListConfig.width = "90%";

    this.dialog.open( ForkComponent ,proListConfig );

  }

   createAbout(){
    const aboutConfig = new MatDialogConfig();
    aboutConfig.autoFocus = true;
    aboutConfig.disableClose = true;
    aboutConfig.height = "50%";
    aboutConfig.width = "50%";
    let aboutDialog = this.dialog.open( AboutComponent,aboutConfig );

    aboutDialog.afterClosed().subscribe(result => {
      if(result !=="")
        this.description = this.profileService.getAbout();
    });

   }

   createPastDesignations(){
    const pastDesignationConfig = new MatDialogConfig();
    pastDesignationConfig.height = "90%";
    pastDesignationConfig.width = "90%";

    let pastDesignationDialog = this.dialog.open( PastDesignationsComponent ,pastDesignationConfig );

    // pastDesignationDialog.afterClosed().subscribe(result => {
    //   if(result !=="")
    //     this.description = this.profileService.getAbout();
    // });

   }

   createSkills(){

    const skillConfig = new MatDialogConfig();
    skillConfig.autoFocus = true;
    skillConfig.disableClose = true;
    skillConfig.height = "60%";
    skillConfig.width = "60%";

    let skillDialog = this.dialog.open( SkillsComponent,skillConfig );

    skillDialog.afterClosed().subscribe(result => {
      this.skills = "";
        this.profileService.getSkills().forEach((el)=>{
          this.skills += el+" ";
        });

    });

   }

   createVideoRecording(){
    const videoRecordingConfig = new MatDialogConfig();
    videoRecordingConfig.autoFocus = true;
    // fileConfig.disableClose = true;
    videoRecordingConfig.height = "90%";
    videoRecordingConfig.width = "90%";

    let videoRecordingDialog = this.dialog.open( VideoRecordingComponent, videoRecordingConfig );

    videoRecordingDialog.afterClosed().subscribe(file => {
      console.log(file);
    });

   }

   createFile(){

    const fileConfig = new MatDialogConfig();
    fileConfig.autoFocus = true;
    // fileConfig.disableClose = true;
    fileConfig.height = "60%";
    fileConfig.width = "60%";

    let fileDialog = this.dialog.open( FileSelectorComponent, fileConfig );

    fileDialog.afterClosed().subscribe(file => {
      console.log(file);
    });

   }

   createText(){

    const textConfig = new MatDialogConfig();
    textConfig.autoFocus = true;
    // fileConfig.disableClose = true;
    textConfig.height = "60%";
    textConfig.width = "60%";

    let textDialog = this.dialog.open( SimpleTextComponent, textConfig );

    textDialog.afterClosed().subscribe(description => {
      if(description !== ""){
        console.log(description);
      }
    });

   }

   search_exclusion(){
     const list_group = document.getElementById('list-group');
     list_group.innerHTML = '';

     this.profileService.getAllUsers(this.exclusion_name,(data)=>{
        if(data.success){
          for( var i = 0; i<data.data.length; ++i){
            const div_tag = document.createElement('div');
            div_tag.className = 'list-group-item ';            
            div_tag.classList.add('dynamic_div');

            const p_tag  = document.createElement('p');
            p_tag.classList.add('dynamic_p');
            const user_name = data.data[i].name;
            p_tag.innerText += user_name;

            const img_tag = document.createElement('img');
            const img_src = data.data[i].profilePicture;
            img_tag.setAttribute('src', img_src);
            img_tag.classList.add('dynamic_img');
            div_tag.appendChild(img_tag);
            div_tag.appendChild(p_tag);
            document.getElementById('list-group').appendChild(div_tag);
            console.log(document.getElementById('list-group'));
          }  
          const u_tag = document.createElement('u');
          u_tag.className = 'activate';

          const li_tag_view_all = document.createElement('li'); 
          // li_tag_view_all.classList.add('dynamic_li');
          li_tag_view_all.className = 'activate';
          
          li_tag_view_all.innerText += 'View All';
          li_tag_view_all.className = 'list-group-item';// activate';

          u_tag.appendChild(li_tag_view_all);

          document.getElementById('list-group').appendChild(u_tag);

          // <button mat-icon-button [matMenuTriggerFor]="appMenu">
          //   <mat-icon>more_vert</mat-icon>
          // </button>

        }else{
          const li_tag = document.createElement('li'); 
          li_tag.innerText += 'Sorry, not found';
          li_tag.className = 'list-group-item';
          document.getElementById('list-group').appendChild(li_tag);

        }
        
     });
   }


}
