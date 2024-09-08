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
  public filter:String="";
  public mealId:String="";

  public onFilterChanged(filter:String){
    this.filter=filter;
    
  }
  public onMealChanged(mealId:String){
    this.mealId=mealId;
  }

}