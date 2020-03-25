import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zudoov',
  templateUrl: './zudoov.component.html',
  styleUrls: ['./zudoov.component.css']
})
export class ZudoovComponent implements OnInit {

  src : string = "/assets/images/zudoov_banner.svg"
  constructor() { }

  ngOnInit() {
  }

  // getBanners(){
  //   this.src = "/assets/images/zudoov_banner.svg"
  // }

}
