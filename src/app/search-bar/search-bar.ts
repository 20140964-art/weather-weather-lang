import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistoryService } from '../service/historyservice';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent implements OnInit {
  searchQuery = '';
  history: string[] = [];
  filteredHistory: string[] = [];
  @Output() onSearch = new EventEmitter<string>();

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.history = this.historyService.getHistory();
    this.filteredHistory = [...this.history];
  }

  onInputChange() {
    const query = this.searchQuery.toLowerCase();
    this.filteredHistory = this.history.filter(city =>
      city.toLowerCase().includes(query)
    );
  }

  search(city: string = this.searchQuery) {
    if (!city.trim()) return;
    this.historyService.addSearch(city);
    this.history = this.historyService.getHistory();
    this.filteredHistory = [...this.history];
    this.onSearch.emit(city);
    this.searchQuery = '';
  }

  delete(city: string) {
    this.historyService.deleteSearch(city);
    this.history = this.historyService.getHistory();
    this.filteredHistory = this.filteredHistory.filter(c => c !== city);
  }

  clearHistory() {
    this.historyService.clearHistory();
    this.history = [];
    this.filteredHistory = [];
  }
}
