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
  public user: User | null;
  public products: Product[] = [];
  public userId: string="";



  constructor(public authService: AuthService, private productsService: ProductsService) {
    this.user = this.authService.user;
    this.loadMyProducts();
  }



private loadMyProducts() {
  if (this.user && this.user.id) {
    const userId = this.user.id.toString();  // Konvertuojame į string
    this.productsService.getMyMeal(userId).subscribe((data) => {
      this.products = data;
    });
  }
}

  public getMealName(mealId: number): string {
    // Čia turėtų būti funkcija, kuri gauna patiekalo pavadinimą pagal mealId
    return ''; 
  }

  public deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.loadMyProducts();
    });
  }
}


