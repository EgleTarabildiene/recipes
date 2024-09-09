









import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';
import { Product } from '../../../models/product';
import { Meal } from '../../../models/meal';
import { MealsService } from '../../../services/meals.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  
 faCoffee = faCoffee;


  public fileForm: FormGroup;
    public filePreview:String|null=null;
  public isError = false;
  public errorText = '';
  public meals:Meal[]=[]
 

  private loadMeals(){
  this.mealsService.getMeals().subscribe((data)=>{
    this.meals=data;
    });
  }





  constructor(private productsService: ProductsService, private router: Router, private mealsService:MealsService) {
    this.fileForm = new FormGroup({
      'name': new FormControl(null),
      'part': new FormControl(null),
      'count': new FormControl(null),
      'meals_id': new FormControl(null),
      'users_id': new FormControl(null),
      'file': new FormControl(null),
      
    });
    this.loadMeals();
  }

  public onSubmitForm() {
   console.log(this.fileForm.value);
    const values = this.fileForm.value;
  
  if (!values.meals_id) {
    this.isError = true;
    this.errorText = 'Please select a meal type.';
    return;
  }
    this.productsService.addProduct(new Product(values.name, values.part, values.count, values.meals_id, values.users_id), values.file).subscribe((result)=>{
      this.router.navigate(["products", "list"]);
     
    });
  }

     public onFileChange(event:Event){
  const filesFile= (event.target as HTMLInputElement).files![0];

    const reader=new FileReader();
    reader.onload=()=>{
      this.filePreview=reader.result as String;
    }
    reader.readAsDataURL(filesFile);

    this.fileForm.patchValue({
      file:filesFile
    });
    this.fileForm.get("file")?.updateValueAndValidity();
  }

  
}

