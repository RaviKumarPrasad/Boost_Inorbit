import { Component, OnInit } from '@angular/core';
// import { Stream } from 'stream';

@Component({
  selector: 'app-video-recording',
  templateUrl: './video-recording.component.html',
  styleUrls: ['./video-recording.component.css']
})
export class VideoRecordingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    let video = document.getElementById('video') ;
    console.log(video);
    if( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ){
      navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream)=>{
          // video.srcObject = stream;

      });
    }
  }



}
