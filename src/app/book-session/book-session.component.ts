import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { ModalService } from '../services/modal-service.service';
import { InfoModalComponent } from '../shared/components/info-modal/info-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.scss']
})
export class BookSessionComponent implements OnInit {
  public form: any;
  customerDetails: any;
  public showDataDialog: BsModalRef<InfoModalComponent>;

  constructor(private formBuilder: FormBuilder,
    private modalService: ModalService,

  ) { }

  ngOnInit(): void {
    this.setForm()
  }

  setForm() {
      this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  submit() {
    this.customerDetails = this.form.value;
    const data = {
      modalData: '',
      headings: {
        message1: `${this.form.value.firstname}`,
        message2: ", your details are submitted",
        message3: "We will contact you shortly!"
      }
    };

    /* Below code sends out email after user fills in session form */

    emailjs.init('2HakWx77xe3kQxhbd')
    emailjs.send("service_mc1te4e", "template_kcam8ay", {
      from_name: `${this.form.value.firstname + '' + this.form.value.lastname}`,
      email: this.form.value.email,
      mobile: this.form.value.mobile,
      message: this.form.value.message,
      reply_to: "fefe",
    }).then(
      (response) => {
        this.modalService.openModal(InfoModalComponent, { class: 'modal-lg modal-dialog-centered' }, data);
        this.form.reset();
      },
      (error) => {
        this.modalService.openModal(InfoModalComponent, { class: 'modal-sm modal-dialog-centered' });
      },
    );

  }

}
