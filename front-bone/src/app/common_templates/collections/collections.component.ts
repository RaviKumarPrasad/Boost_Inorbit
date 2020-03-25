import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatListModule} from '@angular/material/list';


import { ProfileService } from '../../shared_service/profile.service';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  name: string = "";
  elements: string = "";
  listPro = {
    name: "",
    pic: ""
  }
  src1: string = "";
  src2: string = "";
  src3: string = "";
  src4: string = "";

  constructor(public CollectionsComponentDialogRef: MatDialogRef<CollectionsComponent>, private profileService : ProfileService) { }

  ngOnInit() {

    const album = this.profileService.getProfileAlbum();
    
    this.src1 = album[0]['content'];
    this.src2 = album[1]['content'];
    this.src3 = album[2]['content'];
    this.src4 = album[3]['content'];
    
    album.forEach(element => {
      const content = element['content'];

      this.elements += "<mat-grid-tile style='background:lightblue'>" +
                          "<img src="    +
                            content  + 
                          " height='100%' width='100%'>"+ 
                        "</mat-grid-tile>";  

      
    });
    
  }

  onCancel(){
    this.CollectionsComponentDialogRef.close("");
    
  }

  search(){
    this.listPro.name = this.name;

  }
}


