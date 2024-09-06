import { Component } from '@angular/core';
import { Meal } from '../../../models/meal';
import { MealsService } from '../../../services/meals.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-meals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-meals.component.html',
  styleUrl: './list-meals.component.css'
})
export class ListMealsComponent {
  public meals:Meal[]=[];



 constructor (private mealsService:MealsService){
    mealsService.getMeals().subscribe((data)=>{
this.meals=data;
});

 }
}