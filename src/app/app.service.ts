import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  async getRecipies() {
    const response = await this.http.get('http://starlord.hackerearth.com/recipe').toPromise();
    return response;
  }

}
