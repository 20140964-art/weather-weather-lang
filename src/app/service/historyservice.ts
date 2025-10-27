import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private key = 'weather_history';

  getHistory(): string[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  addSearch(city: string): void {
    let history = this.getHistory();
    if (!history.includes(city)) {
      history.unshift(city);
      if (history.length > 10) history.pop();
      localStorage.setItem(this.key, JSON.stringify(history));
    }
  }

  deleteSearch(city: string): void {
    let history = this.getHistory().filter(c => c !== city);
    localStorage.setItem(this.key, JSON.stringify(history));
  }

  clearHistory(): void {
    localStorage.removeItem(this.key);
  }
}
