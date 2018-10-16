/* Copyright (c) Think Blue Data 2017. All Rights Reserved. */

/**
 * Designed for Loopback related queries.
 * Hence, used this only if you are using loopback API
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  protected baseURL: string = 'http://www.yesss.com.mm/api.php';
  protected queryString: string;
  private apiURL: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + 'aGFud2luc3RlckBnbWFpbC5jb206M2VnWTRoUzcwODlPMVY4Nm5hZDM3MjRLNG0xQjA0TDU='
    })
  };

  constructor(
    protected http: HttpClient
  ) {
  }

  public setQueryString(queryString: string): void {
    this.queryString = queryString;
    this.apiURL = this.baseURL + '?_d=' + this.queryString;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }

  public getPath(): string {
    return this.apiURL;
  }

  public getAll(page: number = 1, itemsPerPage: number = 10): Observable<any>  {
    return this.http.get(this.apiURL + '&' + 'page=' + page + '&' + 'items_per_page=' + itemsPerPage, this.httpOptions);
  }

  public save(data: any): Observable<any> {
    return this.http.post(this.apiURL, data, this.httpOptions);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(this.apiURL + '/' + id, this.httpOptions);
  }

  public get(id: any): Observable<any> {
    return this.http.get(this.apiURL + '/' + id, this.httpOptions);
  }
}
