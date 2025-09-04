import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    InfoModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SharedModule { }
