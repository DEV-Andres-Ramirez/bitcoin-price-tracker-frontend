import { Component, signal } from '@angular/core';
import { Tracker } from './components/tracker/tracker';

@Component({
  selector: 'app-root',
  imports: [Tracker],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('bitcoin-price-tracker-frontend');
}
