import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent, ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  
  public fileForm: FormGroup;
    public filePreview:String|null=null;
  public isError = false;
  public errorText = '';
 

  constructor(private productsService: ProductsService, private router: Router) {
    this.fileForm = new FormGroup({
      'name': new FormControl(null),
      'part': new FormControl(null),
      'count': new FormControl(null),
      'file': new FormControl(null),
    });
  }

  public onSubmitForm() {
   console.log(this.fileForm.value);
    const values=this.fileForm.value;
    this.productsService.addProduct(new Product(values.name, values.part, values.count), values.file).subscribe((result)=>{
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