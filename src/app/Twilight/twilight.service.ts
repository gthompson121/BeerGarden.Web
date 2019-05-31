import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
  export class TwilightService {
    constructor(private httpClient: HttpClient){
    }
    twilight:any;

    get_twilight(){
      let promise = new Promise((resolve, reject) => {
        this.httpClient.get(environment.twlightUrl)
        .toPromise()
        .then(
          res => {
            this.twilight = res;
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
      });
    return promise;
  }
}