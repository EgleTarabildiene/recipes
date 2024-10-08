 import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { MealsService } from '../../../../services/meals.service';
import { Meal } from '../../../../models/meal';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { StarComponent } from '../../../star/star.component';
import { FilterProductsComponent } from '../filter-products/filter-products.component';
import { ModalComponent } from '../../../modal/modal.component';
import { HttpClient } from '@angular/common/http';
declare var bootstrap: any;



@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, FontAwesomeModule, StarComponent, FilterProductsComponent, ModalComponent],
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnChanges {

    public selectedProductId: number | null = null;
 

 
 
 salad1: string = 'assets/img/salad1.jpg'; // Path to your logo
  
  faCoffee = faCoffee;
  public meals:Meal[]=[];
    public mealId:String="";

 public products: Product[] = [];
public selectedProduct: Product | null = null; //


    @Input() filterText: string = "";
  @Input() filterMealId: string = "";



 private loadProducts() {
  if (this.filterText !== "") {
    this.productsService.getFiltredProducts(this.filterText).subscribe((data) => {
      this.products = data;
    });
 } else if (this.filterMealId !== "") {
    this.productsService.getProductsByMeal(this.filterMealId).subscribe((data) => {
      this.products = data;
    });
  } else {
    // Užkrauname visus produktus, jei nėra pasirinktas konkretus patiekalas
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}


    private loadMeals(){
  this.mealsService.getMeals().subscribe((data)=>{
    this.meals=data;
    });
  }



  constructor(private productsService: ProductsService, public authService: AuthService, private mealsService:MealsService, private http:HttpClient) {
    this.loadProducts();
    this.loadMeals();
  }

  openDeleteModal(productId: number) {
    this.selectedProductId = productId;
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
      deleteModal.style.display = 'block';
    }
  }
  closeDeleteModal() {
    this.selectedProductId = null; // Reset the selected product ID
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
      deleteModal.style.display = 'none';
    }
  }
confirmDelete() {
    if (this.selectedProductId != null) {
      this.productsService.deleteProduct(this.selectedProductId).subscribe(() => {
        this.loadProducts(); // Reload the products list after deletion
        this.closeDeleteModal(); // Close the modal after deletion
      });
    }
  }

    ngOnChanges(changes: SimpleChanges): void {
    this.loadProducts();
  }


  public deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  public getMealName(id:number){
    let result="";
    this.meals.forEach((meal)=>{ 
      if (meal.id==id) 
        result= meal.name;
    });
    return result;
  }
}