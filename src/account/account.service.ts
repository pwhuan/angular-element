import { Injectable } from '@angular/core';
import { mergeMap as _observableMergeMap, catchError as _observableCatch, catchError, finalize } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { ElMessageService } from 'element-angular'
import { Router } from '@angular/router';
import { AppConsts } from 'src/shared/AppConsts';

@Injectable()
export class AccountServiceProxy {
  baseUrl = AppConsts.remoteServiceBaseUrl;
  constructor(private message: ElMessageService, private http: HttpClient, private router: Router) {
  }

  logout() {
    let url = this.baseUrl + "/act/vshow/get";
    return this.http.post(url, { aaa: 1 })
      .pipe(
        catchError((err) => this.handleError(err))
      ).pipe(_observableMergeMap((response_: any) => {
        return this.processRegister(response_);
      }));
  }


  protected processRegister(response: any): Observable<any> {
    const status = response.code;
    if (status !== 200) {
      this.message.error(response.msg);
    }
    return _observableOf<any>(<any>response);
  }

  private handleError(error: HttpErrorResponse) {
    this.message.error('网络错误，请稍后再试.');
    return throwError(error);
  };
}