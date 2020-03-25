import { Injectable } from '@angular/core';
import { LocalStorageService } from './localStorage/local-storage.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private description: String= "";
  private profilePicture: String = "";
  private backgroundPicture: String = "";
  profileAlbum: Array<JSON> = [];
  profileAlbumSize: Number = 0;

  backgroundAlbum: Array<JSON> = [];
  backgroundAlbumSize: Number = 0;

  Skills: Array<string> = [];
  documentData:JSON;

  STORAGE_KEY = "TOKEN_ACCESS";

  constructor(private http: HttpClient,private localStorageService: LocalStorageService ) { }


  UserAllInfo(callback){
    const TOKEN = this.localStorageService.get(this.STORAGE_KEY).token;
    this.http.post('api/v1/userAllInfo', {description: this.description, TOKEN: TOKEN }).subscribe(callback);
  }
  getUserAllInfo(){
    console.log(this.documentData);
    return this.documentData;
  }

  getAllUsers(exclusion_name, callback){
    const TOKEN = this.localStorageService.get(this.STORAGE_KEY).token;
    this.http.post('api/v1/AllUserInfo', {exclusion_name: exclusion_name, TOKEN: TOKEN }).subscribe(callback);

  }

  setProfilePicture(imageJson){
    const body = {
      token: this.localStorageService.get(this.STORAGE_KEY).token,
      data:{
        name: imageJson.name,
        size: imageJson.size,
        type: imageJson.type,
        content: imageJson.content,
      }
    }
    this.http.post('api/v1/setProfilePic', body).subscribe(( data)=>{
    });
  }

  setAbout(description){
    const TOKEN = this.localStorageService.get(this.STORAGE_KEY).token
    this.http.post('api/v1/experience', {description: description, TOKEN: TOKEN }).subscribe(( data)=>{
      console.log(data);
    });

  }

  setBackgroundPicture(imageJson){
    const body = {
      token: this.localStorageService.get(this.STORAGE_KEY).token,
      data:{
        name: imageJson.name,
        size: imageJson.size,
        type: imageJson.type,
        content: imageJson.content,
      }
    }

    this.http.post('api/v1/setBackgroundPic', body).subscribe(( data)=>{
    });

  }

  setExperience( data, callback)
  {
    const body = {
      token: this.localStorageService.get(this.STORAGE_KEY).token,
      data: data
    }
    console.log(data);
    
    this.http.post('api/v1/setExperience', body).subscribe(callback);

  }

  setEducation( data, callback)
  {
    const body = {
      token: this.localStorageService.get(this.STORAGE_KEY).token,
      data: data
    }
    console.log(data);
    
    this.http.post('api/v1/setEducation', body).subscribe(callback);

  }

  getProfilePicture(){
    return this.profilePicture;
  }
  getProfileAlbum(){
    return this.profileAlbum;
  }
  getBackgroundAlbum(){
    return this.backgroundAlbum;
  }

  getBackgroundPicture(){
    return this.backgroundPicture;

  }

  initializeProfilePicture(profilePicture){
    this.profilePicture = profilePicture;
  }
  initializeProfileAlbum(profileAlbum){
    profileAlbum.forEach((el)=>{
      this.profileAlbum.push(el);
    });
    this.profileAlbumSize = this.profileAlbum.length;
  }

  initializeBackgroundPicture(backgroundPicture){
    this.backgroundPicture = backgroundPicture;
  }
  initializeBackgroundAlbum(backgroundAlbum){
    backgroundAlbum.forEach((el)=>{
      this.backgroundAlbum.push(el);
    });
    this.backgroundAlbumSize = this.backgroundAlbum.length;
    console.log(this.backgroundAlbumSize);
  }
  initializeAbout( description){
    this.description = description;

  }

  getAbout(){
     return this.description;
    // const TOKEN = this.localStorageService.get(this.STORAGE_KEY).token
    // this.http.post('api/v1/get', {description: this.description, TOKEN: TOKEN }).subscribe(( data)=>{
    // });

  }

  initializeSkills(skill){
    this.Skills.push(skill);
  }
  getSkills(){
    return this.Skills;
  }



}
