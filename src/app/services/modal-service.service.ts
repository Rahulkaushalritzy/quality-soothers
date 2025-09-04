import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public bsModalRef: BsModalRef;
  modalResponse: any;

  constructor(private modalsService: BsModalService,
  ) { }

  openModal(component?:any, size?:any, data?:any): any {
    this.bsModalRef = this.modalsService.show(component, size)
    this.bsModalRef.content.data = data;
    this.modalResponse = this.bsModalRef.content.data.modalOutput;    
  }

  closeAllModal(): void {
    this.bsModalRef?.hide();
  }
}
