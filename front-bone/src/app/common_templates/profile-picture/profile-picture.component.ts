import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { ProfileService } from '../../shared_service/profile.service';



@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  private profilePicture;
  private imgContent;
  private count = 0;


  constructor(public profilePictureDialogRef: MatDialogRef<ProfilePictureComponent>, private profileService : ProfileService) { }

  ngOnInit() {
      this.profilePicture = this.profileService.getProfilePicture();
  }

  onSubmit(){
    event.preventDefault();
    let element: HTMLElement = document.getElementById('fileId') as HTMLElement;
    element.click();
  }
  onFileChange(event:any){
    const file = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]); 
    reader.onload = (_event) => { 
      this.imgContent = reader.result;
      this.profilePicture = this.imgContent; 
      const imageJson = {
        name: file[0].name,
        size: file[0].size,
        type: file[0].type,
        content: this.imgContent,
      }
      this.profileService.setProfilePicture(imageJson);
      this.profilePictureDialogRef.close(this.imgContent);
      
      
    }
    
  }
  onCancel(){
      this.profilePictureDialogRef.close("");
      
  }

  leftShift(){
    const profileAlbum = this.profileService.getProfileAlbum();
    this.count = this.count % profileAlbum.length; 
    this.profilePicture = profileAlbum[this.count]['content'];       
    if(!this.count){
      this.count = profileAlbum.length;
    }else{
      --this.count;
    }
  }

  rightShift(){
    const profileAlbum = this.profileService.getProfileAlbum();
    this.count = this.count % profileAlbum.length;    
    this.profilePicture = profileAlbum[this.count]['content'];
    ++this.count;
  }



}
