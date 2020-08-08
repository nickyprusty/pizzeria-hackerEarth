import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app/app.service';
import { ModalContainerComponent } from '../modal-loader.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id = null;
  recipieDetails = null;
  constructor(
    private appService: AppService,
    private router: Router) {}
  ngOnInit() {
    this.getRecipie();
  }

  async getRecipie() {
    this.recipieDetails = await this.appService.getRecipieDetails(this.id);
    console.log(this.recipieDetails);
  }
  naviagteToHome() {
    ModalContainerComponent.currentDialog.close();
  }
}
