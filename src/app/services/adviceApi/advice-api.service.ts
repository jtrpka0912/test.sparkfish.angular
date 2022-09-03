import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdviceApiService {

  private baseEndpoint: string = 'https://api.adviceslip.com/advice';

  constructor(
    private http: HttpClient
  ) { }

  searchAdvice(query: string) {
    return this.http.get(`${this.baseEndpoint}/search/${query}`);
  }
}
