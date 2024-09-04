import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-profile-main',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './profile-main.component.html',
  styleUrl: './profile-main.component.css'
})
export class ProfileMainComponent {
  public user:User|null;
public product: Product | null = null;

  constructor (private authService:AuthService, private productsService:ProductsService ){
    this.user=authService.user;

  }


  private loadProduct(id: number): void {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }
}



