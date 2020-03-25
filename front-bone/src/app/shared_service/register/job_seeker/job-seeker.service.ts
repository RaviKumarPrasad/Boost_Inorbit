import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

  constructor( private http: HttpClient ) { }
  getRegister(Job_Seeker){
    this.http.post('api/v1/register', Job_Seeker ).subscribe(( data)=>{
        console.log(data);
    });
  }
}

