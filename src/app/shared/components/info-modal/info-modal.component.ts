import { Component, Input, OnInit, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {

  public data: any = {
    modalData: {},
    headings: {
      message1: '',
      message2: '',
      message3: ''
    }
  }

  constructor(private modalService: ModalService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    
  }

  closeModal() {
    this.modalService.closeAllModal();
  }

}
