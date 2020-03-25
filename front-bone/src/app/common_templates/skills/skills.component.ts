import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProfileService } from '../../shared_service/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private skill: String = "";

  constructor( public skillDialogRef: MatDialogRef<SkillsComponent>, private profileService : ProfileService) { }

  ngOnInit() {
    // this.skill = this.profileService.getSkills();
  }

  addSkills(){
    this.profileService.initializeSkills(this.skill);
    this.skillDialogRef.close(this.profileService.getSkills());

  }

}
