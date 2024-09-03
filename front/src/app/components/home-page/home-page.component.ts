import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})


export class HomePageComponent {
  public user:User|null;
fruit3: string = 'assets/img/fruit33.jpg'; // Path to your logo
salad1: string = 'assets/img/salad1.jpg'; // Path to your logo
salad2: string = 'assets/img/salad2.jpg'; // Path to your logo



  constructor (private authService:AuthService){
    this.user=authService.user;


  }

}