import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {


    files: File[] = [];  // Array to store selected files

  // Method to handle file selection
  onFileSelected(event: any): void {
    // Convert FileList to an array and assign to `files`
    this.files = Array.from(event.target.files);
  }
}
