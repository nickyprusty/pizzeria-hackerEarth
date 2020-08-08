import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pizzeria';
  recipies = null;
  recipiesForDisplay = null;
  searchTerm = new FormControl('');
  displayError = false;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.recipies = await this.appService.getRecipies();
    this.recipiesForDisplay = this.recipies !== 'error' ? JSON.parse(JSON.stringify(this.recipies)) : null;
    if ( this.recipiesForDisplay ) {
      this.displayError = false;
      this.populateRecipieName();
    } else {
      this.displayError = true;
    }
    console.log(this.recipies, this.recipiesForDisplay);
  }
  check() {
    const tempArray = JSON.parse(JSON.stringify(this.recipies));
    this.recipiesForDisplay = tempArray.filter(_ => _.name.toLowerCase().includes(this.searchTerm.value.toLowerCase()));
    this.populateRecipieName();
  }
  populateRecipieName() {
    this.recipiesForDisplay.map(_ => _.name = _.name.split(''));
  }
  checkHighlight(char) {
    return this.searchTerm.value.toLowerCase().includes(char.toLowerCase());
  }
}
