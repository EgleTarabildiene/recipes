import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ErrorService } from '../../../services/error.service';
import { ModalComponent } from '../../modal/modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
   @ViewChild('registerModal') registerModal!: any;
 stra: string= 'assets/img/strawberry-2688_640.jpg';

  constructor(private authService: AuthService, private errorService: ErrorService, private router: Router) {}


 openModal() {
    const modalDiv = document.getElementById('registerModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  closeModal() {
    const modalDiv = document.getElementById('registerModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }




  onRegister(f: NgForm) {
    this.authService.registerUser(f.form.value).subscribe({
      next: (data) => {
        console.log('Registration successful:', data);

        // Open the modal to show success message
        this.openModal();

        // Redirect to login page after a delay (e.g., 3 seconds)
        setTimeout(() => {
          this.closeModal();
          this.router.navigate(['/auth/login']);
        }, 3000);  // 3-second delay
      },
      error: (error) => {
        this.errorService.errorEmitter.emit(error.error.text);
      }
    });
  }
}