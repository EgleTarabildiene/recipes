import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';
import { ProductsService } from '../../../services/products.service';
import { Router, RouterLink } from '@angular/router';
import { MealsService } from '../../../services/meals.service';
import { Meal } from '../../../models/meal';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-new-meals',
  standalone: true,
  imports: [FormsModule, CommonModule, ErrorComponent, RouterLink],
  templateUrl: './new-meals.component.html',
  styleUrl: './new-meals.component.css'
})
export class NewMealsComponent {

 public meals:Meal[]=[];
 public isError=false;
  public errorText="";


constructor (private mealsService:MealsService, private router:Router, private authServise:AuthService){
    mealsService.getMeals().subscribe((data)=>{
this.meals=data;
});
  }





  
  public mealSubmit(form:NgForm){
    this.mealsService.addMeal(form.form.value).subscribe({
      next:(data)=>{
        this.router.navigate(['meals','new']);
      },
      error:(error)=>{
        this.isError=true;
        this.errorText=error.error.text;
      }
    });
  }
}

