import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { ProfileService } from '../../shared_service/profile.service'; 

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  private filename: String = "";
  private description: String = "";
  
  constructor( public fileDialogRef: MatDialogRef<FileSelectorComponent>,
               private profileService : ProfileService) { }


  ngOnInit() {
  }

  fileAtttach(){
    event.preventDefault();
    let element: HTMLElement = document.getElementById('fileId') as HTMLElement;
    element.click();

  }

  onFileChange(event:any){
    this.filename = event.target.files;
    console.log(this.filename);
  }

  descriptionPublish(){
    if(this.filename !== ""){
      this.fileDialogRef.close(this.description);
    }

  }
}
