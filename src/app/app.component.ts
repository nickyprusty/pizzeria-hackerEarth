import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pizzeria';
  recipies = null;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.recipies = await this.appService.getRecipies();
    console.log(this.recipies);
  }
}
