import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  baseURL:string = "https://api.themoviedb.org/3/configuration";
  constructor(private http:HttpClient) { 
    
  }

  getConfig(){
    return this.http.get<Configuration>(this.baseURL);
  }
}
