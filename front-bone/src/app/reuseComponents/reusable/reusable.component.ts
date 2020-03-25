import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {

    constructor() {
      console.log("called => Contructor()");

    }

  ngOnChanges(){
    console.log("called => ngOnChange()");
    
  }
  
  ngOnInit() {
    console.log("called => ngOnInit()");
    
    return this.getExperienceComponenets();
  }

  getExperienceComponenets(){
    let expContent = document.getElementById("expContent");
    let expHeader = document.getElementById('expHeader');
    // let expHeader1 = expHeader.cloneNode(true);
    // let expContent1 = expContent.cloneNode(true);

    let component  = {
      expHeader: expHeader, 
      expContent: expContent
    }
    console.log(component);

    return component;
  }

}
