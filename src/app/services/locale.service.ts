import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getLgasForState = (state: number) => {
    return this.http.get(`${this.BASE_URL}/locale/lgas/state/${state}`);
  };

  getStates = () => {
    return this.http.get(`${this.BASE_URL}/locale/states`);
  };
  getNationalities = () => {
    return this.http.get(`${this.BASE_URL}/locale/countries`);
  };
}
