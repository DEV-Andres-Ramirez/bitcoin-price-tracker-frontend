import { Component, OnInit } from '@angular/core';
import { Bitcoin } from '../../services/bitcoin';
import { interval } from 'rxjs';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-tracker',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './tracker.html',
  styleUrl: './tracker.scss',
})
export class Tracker implements OnInit {
  priceUsd: number | null = null;
  loading = false;
  lastUpdated: Date | null = null;

  constructor(private readonly btc: Bitcoin) {}

  ngOnInit() {
    interval(30000).subscribe(() => this.fetchPrice());
    this.fetchPrice();
  }

  fetchPrice(): void {
    this.loading = true;
    this.btc.getUsdPrice().subscribe((price) => {
      this.priceUsd = price;
      this.lastUpdated = new Date();
      this.loading = false;
    });
  }

  manualRefresh(): void {
    this.fetchPrice();
  }
}
