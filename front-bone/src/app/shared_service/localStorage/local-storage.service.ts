import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private LocalStorage:StorageService) { }

  set(STORAGE_KEY, data){
    this.LocalStorage.set(STORAGE_KEY, data);
  }
  get(STORAGE_KEY){
    return this.LocalStorage.get(STORAGE_KEY);
    
  }
  
}
