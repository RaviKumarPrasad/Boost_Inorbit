import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { ProfileService } from '../../shared_service/profile.service'; 

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.css']
})
export class SimpleTextComponent implements OnInit {

  private filename: String = "";
  private description: String = "";
  
  constructor( public fileDialogRef: MatDialogRef<SimpleTextComponent>,
               private profileService : ProfileService) { }


  ngOnInit() {
  }


  descriptionPublish(){
    if(this.description !== ""){
      this.fileDialogRef.close(this.description);
    }

  }
  
  textCancel(){
    this.fileDialogRef.close("");
  }


}
