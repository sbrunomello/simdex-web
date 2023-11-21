import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/core/services/coin.service';

@Component({
  selector: 'app-coin-price',
  templateUrl: './coin-price.component.html',
  styleUrls: ['./coin-price.component.css'],
})
export class CoinPriceComponent implements OnInit {
  bitcoinPrice!: number;

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.getCryptoPrice('bitcoin');
  }

  getCryptoPrice(symbol: string): void {
    this.coinService.getCoinPrice(symbol).subscribe((data) => {
      this.bitcoinPrice = data[symbol].usd;
    });
  }
}

