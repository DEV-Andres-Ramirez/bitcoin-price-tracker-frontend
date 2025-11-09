import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Bitcoin {
  constructor(private readonly http: HttpClient) {}

  private readonly API =
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

  getUsdPrice(): Observable<number> {
    return this.http.get<any>(this.API).pipe(map((response) => response.bitcoin.usd));
  }
}
