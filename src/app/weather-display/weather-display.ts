import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.html'
})
export class WeatherDisplayComponent {
  @Input() weather: any;
}
