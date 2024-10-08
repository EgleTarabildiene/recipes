import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ErrorComponent } from "../../helper/error/error.component";
import { ErrorService } from '../../../services/error.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

pyra: string= 'assets/img/pyragas-gervuogiu.webp';
stra: string= 'assets/img/strawberry-2688_640.jpg';
herby: string= 'assets/img/Herby-lentil-salad-500x446.webp';
  constructor (private authService:AuthService, private router:Router, private errorService:ErrorService){

  }


  public onLogin(form:NgForm){
     this.authService.loginUser(form.form.value).subscribe({
      next: (data)=>{ 
        this.router.navigate(['/']);
      },
      error: (error)=>{
        this.errorService.errorEmitter.emit(error.error.text);

      }

     })
  }
}