import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly apiUrl: string = 'https://randomuser.me/api/';

  constructor(private _http: HttpClient) {
  }

  getDataFromApi(count: number): Observable<any> {
    if (count) {
      return this._http.get(`${this.apiUrl}?results=${count}&nat=us`);
    } else {
      return this._http.get(`${this.apiUrl}?results=10`);
    }

  }
}
