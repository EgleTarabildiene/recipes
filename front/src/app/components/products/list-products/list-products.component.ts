import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterProductsComponent } from "./filter-products/filter-products.component";
import { TableProductsComponent } from "./table-products/table-products.component";

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [FilterProductsComponent, TableProductsComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
   schemas: [NO_ERRORS_SCHEMA]
})
export class ListProductsComponent {
  public filter: string = "";
  public mealId: string = "";

  // Handles when the user changes the name filter
  public onFilterChanged(filter: string) {
    this.filter = filter;
  }

  // Handles when the user selects a meal
  public onMealChanged(mealId: string) {
    this.mealId = mealId;
  }
}