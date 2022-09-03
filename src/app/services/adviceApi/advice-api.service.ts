import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdviceSlipMessage } from 'src/app/models/IAdviceSlipMessage';
import { IAdviceSlipResult } from 'src/app/models/IAdviceSlipResult';

@Injectable({
  providedIn: 'root'
})
export class AdviceApiService {

  private baseEndpoint: string = 'https://api.adviceslip.com/advice';

  constructor(
    private http: HttpClient
  ) { }

  searchAdvice(query: string): Observable<IAdviceSlipResult | IAdviceSlipMessage> {
    return this.http.get<IAdviceSlipResult | IAdviceSlipMessage>(`${this.baseEndpoint}/search/${query}`);
  }
}
