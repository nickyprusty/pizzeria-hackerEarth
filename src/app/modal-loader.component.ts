import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DetailsComponent } from './details/details.component';

@Component({
    selector: 'app-modal-container',
    template: ''
})
export class ModalContainerComponent implements OnDestroy {

    public static currentDialog = null;
    destroy = new Subject<any>();

    constructor(
        private modalService: NgbModal,
        route: ActivatedRoute,
        router: Router
    ) {
        route.params.pipe(takeUntil(this.destroy)).subscribe(params => {

            // When router navigates on this component is takes the params
            // and opens up the photo detail modal
            ModalContainerComponent.currentDialog = this.modalService.open(DetailsComponent, { centered: true, size: 'lg' });
            ModalContainerComponent.currentDialog.componentInstance.id = params.id;
            console.log(params);

            // Go back to home page after the modal is closed
            ModalContainerComponent.currentDialog.result.then(result => {
                router.navigateByUrl('/');
            }, reason => {
                router.navigateByUrl('/');
            });
        });
    }
    ngOnDestroy() {
        this.destroy.next();
    }
}