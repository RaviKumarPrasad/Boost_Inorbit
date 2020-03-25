import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  STORAGE_KEY = "TOKEN_ACCESS";
  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private router: Router ) { }

  navigateTo(){
    this.router.navigate(['/profile']);
  }

  getLogin(user){
    this.http.post('api/v1/login', user).subscribe(( data)=>{
      if(data.hasOwnProperty('success')){
        this.localStorageService.set(this.STORAGE_KEY, data);
        console.log(this.localStorageService.get(this.STORAGE_KEY));
        this.navigateTo();
      }
        
    });
  }
}
