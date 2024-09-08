import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableProductsComponent } from '../table-products/table-products.component';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [FormsModule, CommonModule, TableProductsComponent],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {
  public filter:String="";
  public mealId:String="";

  @Output()
  filterChanged=new EventEmitter<String>();
  mealChanged=new EventEmitter<String>();


  public onFilter(){
    this.filterChanged.emit(this.filter);

  }
  public onMealId(){
    this.mealChanged.emit(this.mealId);

  }
}