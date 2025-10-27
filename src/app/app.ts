import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './service/weather-service';
import { SearchBarComponent } from './search-bar/search-bar';
import { WeatherDisplayComponent } from './weather-display/weather-display';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, SearchBarComponent, WeatherDisplayComponent]
})
export class App {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather(city: string) {
    this.weatherService.getCurrentWeather(city).subscribe({
      next: (data) => this.weatherData = data,
      error: () => alert('Error fetching weather data!')
    });
  }
}
