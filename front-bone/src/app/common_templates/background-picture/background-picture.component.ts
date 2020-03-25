import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { ProfileService } from '../../shared_service/profile.service';

@Component({
  selector: 'app-background-picture',
  templateUrl: './background-picture.component.html',
  styleUrls: ['./background-picture.component.css']
})
export class BackgroundPictureComponent implements OnInit {

  private backgroundPicture;
  private imgContent;

  constructor(public backgroundPictureDialogRef: MatDialogRef<BackgroundPictureComponent>, private profileService : ProfileService) { }

  ngOnInit() {
      this.backgroundPicture = this.profileService.getBackgroundPicture();
  }


  onSubmit(){
    event.preventDefault();
    let element: HTMLElement = document.getElementById('imgId') as HTMLElement;
    element.click();
  }
  onFileChange(event:any){
    const file = event.target.files;
    console.log(file[0].name);
    console.log(file[0].size);
    console.log(file[0].type);


    var reader = new FileReader();
    reader.readAsDataURL(file[0]); 
    reader.onload = (_event) => { 
      this.imgContent = reader.result;
      this.backgroundPicture = this.imgContent;
      const imageJson = {
        name: file[0].name,
        size: file[0].size,
        type: file[0].type,
        content: this.imgContent,
      }
      this.profileService.setBackgroundPicture(imageJson);
      this.backgroundPictureDialogRef.close(this.imgContent);
      
      
    }
    
  }
  onCancel(){
      this.backgroundPictureDialogRef.close("");
      
  }




}
