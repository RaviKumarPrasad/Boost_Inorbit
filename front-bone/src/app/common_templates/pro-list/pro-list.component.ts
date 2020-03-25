import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatListModule} from '@angular/material/list';


import { ProfileService } from '../../shared_service/profile.service';


@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css']
})
export class ProListComponent implements OnInit {

  name: string = "";
  elements: string = "";
  listPro = {
    name: "",
    pic: ""
  }


  constructor(public ProListComponentDialogRef: MatDialogRef<ProListComponent>, private profileService : ProfileService) { }

  ngOnInit() {
  }

  onCancel(){
    this.ProListComponentDialogRef.close("");
    
  }

  search(){
    this.listPro.name = this.name;

  }

}
