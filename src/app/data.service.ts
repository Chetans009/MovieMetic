import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { ImageConfiguration } from './ImageConfiguration';
import { filter, map, take, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { AllConfiguration } from './AllConfiguration';
import { CountryConfiguration } from './CountryConfiguration';

@Injectable()
export class DataService {
  baseURL: string = "https://api.themoviedb.org/3/";
  constructor(private http: HttpClient) {

  }

  getConfig() {
    return this.http.get<Configuration>(this.baseURL);
  }

  getImageConfig(): Observable<ImageConfiguration> {
    return this.http.get<any>(this.baseURL+"configuration").pipe(
      map(result => {
        return result.images;
      })
    );
  }

  getAllConfig(): Observable<AllConfiguration> {
    let baseConfig = this.http.get<Configuration>(this.baseURL + "configuration");
    let countryConfig = this.http.get<any>(this.baseURL + "configuration/countries");
    return forkJoin([baseConfig, countryConfig]).pipe(map(([baseConfigResult, countryConfigResult]) => {
      return {
        configuration : baseConfigResult as Configuration,
        countries : countryConfigResult as CountryConfiguration[]
      }
    }));
  }
}
