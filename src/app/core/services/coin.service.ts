import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private apiUrl = 'https://api.coingecko.com/api/v3';
  private updateInterval = 10000; // Intervalo de atualização em milissegundos

  constructor(private http: HttpClient) {}
  
  getCoinData(): Observable<any[]> {
    return interval(this.updateInterval).pipe(
      switchMap(() => this.http.get<any[]>(`${this.apiUrl}/coins/markets?vs_currency=usd&category=stablecoins&order=market_cap_desc&per_page=30&page=1&sparkline=false`))
    );
  }

  getCoinPrice(symbol: string): Observable<any> {
    // Use switchMap para cancelar a solicitação anterior e emitir uma nova no intervalo especificado
    return interval(60000).pipe(
      switchMap(() => this.http.get(`${this.apiUrl}/simple/price?ids=${symbol}&vs_currencies=usd`))
    );
  }
}
