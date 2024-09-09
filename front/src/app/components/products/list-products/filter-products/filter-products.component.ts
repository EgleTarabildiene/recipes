import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableProductsComponent } from '../table-products/table-products.component';
import { MealsService } from '../../../../services/meals.service';
import { Meal } from '../../../../models/meal';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [FormsModule, CommonModule, TableProductsComponent],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent implements OnInit {
  public filter: string = "";
  public selectedMealId: string = "";
  public meals: Meal[] = [];


  @Output() filterChanged = new EventEmitter<string>();
  @Output() mealChanged = new EventEmitter<string>();



 constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.loadMeals();
  }


  
  private loadMeals() {
    this.mealsService.getMeals().subscribe((data) => {
      this.meals = data;
    });
  }

  public onMealSelect() {
    this.mealChanged.emit(this.selectedMealId);
  }

  // Emit event for filtering by name
  public onFilter() {
    this.filterChanged.emit(this.filter);
  }



}