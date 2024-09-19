
import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
// @ts-ignore
const $:any = window['$'];


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  isVisible: boolean = false;
  message: string = '';

  openModal(message: string) {
    this.message = message;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}









/*setTimeout(()=>{
  this.closeModal()
},2000)*/