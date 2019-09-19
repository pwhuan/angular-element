
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConsts } from './shared/AppConsts';

@Injectable()
export class ConfigService {
    constructor(private _http: HttpClient) { }

    loadConfig() {
        return this._http.get('/assets/appconfig.json')
            .toPromise()
            .then(res => {
                AppConsts.remoteServiceBaseUrl = res['remoteServiceBaseUrl'];
            });
    }
   
}