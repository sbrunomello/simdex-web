// coin-table.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoinService } from 'src/app/core/services/coin.service';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.css']
})
export class CoinTableComponent implements OnInit {
  coins: any[] = [];

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.getCoinData();
  }

  getCoinData(): void {
    this.coinService.getCoinData().subscribe(data => this.coins = data);
  }
}
