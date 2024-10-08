import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductsService } from '../../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { StarComponent } from '../../../star/star.component';
import { UsersService } from '../../../../services/users.service';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule, StarComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
    public user:User|null;
  salad2: string = 'assets/img/salad2.jpg';
  public product: Product | null = null;

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService, private usersService: UsersService, private authService:AuthService
  ) {
     this.user=authService.user;
     
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(Number(id));
    }
  }

  private loadProduct(id: number): void {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }
}



/*
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductsService } from '../../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  public product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(Number(id));
    }
  }

  private loadProduct(id: number): void {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }
}
  */