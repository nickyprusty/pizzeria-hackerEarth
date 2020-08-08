import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public response = null;
  constructor(private http: HttpClient) { }

  async getRecipies() {
    try {
      this.response = await this.http.get('http://starlord.hackerearth.com/recipe').toPromise();
      localStorage.setItem('recipies', this.response);
      return this.response;
    } catch {
      return 'error';
    }
  }

  async getRecipieDetails(id) {
    if (this.response) {
      return this.response.find(_ => _.id == id);
    } else {
      await this.getRecipies();
      return this.response.find(_ => _.id == id);
    }
  }
}
