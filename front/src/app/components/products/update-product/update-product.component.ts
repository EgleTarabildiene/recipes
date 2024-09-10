import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';
import { MealsService } from '../../../services/meals.service';
import { Meal } from '../../../models/meal';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent, ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  public fileForm: FormGroup;
  public filePreview: String | null = null;
  public meals: Meal[] = [];
  public isError = false;
  public errorText = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private mealsService: MealsService
  ) {
    this.fileForm = new FormGroup({
      'name': new FormControl(null),
      'part': new FormControl(null),
      'count': new FormControl(null),
      'meals_id': new FormControl(null),
      'file': new FormControl(null),
    });
    this.loadMeals();
    this.loadProduct();
  }

  private loadMeals() {
    this.mealsService.getMeals().subscribe((data) => {
      this.meals = data;
    });
  }

  private loadProduct() {
    const productId = this.route.snapshot.params['id'];
    this.productsService.getProduct(productId).subscribe((product) => {
      this.fileForm.patchValue({
        name: product.name,
        part: product.part,
        count: product.count,
        meals_id: product.meals_id,
        file: null,
      });
      this.fileForm.updateValueAndValidity();
    });
  }

  public onSubmitForm() {
   console.log(this.fileForm.value);
    const values = this.fileForm.value;
  
  if (!values.meals_id) {
    this.isError = true;
    this.errorText = 'Please select a meal type.';
    return;
  }
    this.productsService.updateProduct(new Product(values.name, values.part, values.count, values.meals_id, values.users_id), values.file).subscribe((result)=>{
      this.router.navigate(["products", "list"]);
     
    });
  }


  public onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreview = reader.result as String;
    };
    reader.readAsDataURL(file);

    this.fileForm.patchValue({
      file: file
    });
    this.fileForm.get('file')?.updateValueAndValidity();
  }
}