import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherstack.com/current';
  private apiKey = '3ac6b2a2a8c8bf03d59a00e3bc257e53';

  constructor(private http: HttpClient) { } 

  getCurrentWeather(location: string): Observable<any> {
    const url = `${this.apiUrl}?access_key=${this.apiKey}&query=${location}`;
    return this.http.get<any>(url);
  }
}
