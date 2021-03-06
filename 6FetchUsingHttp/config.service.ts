import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/girish.json';


  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
