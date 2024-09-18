import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})


export class HomePageComponent {


  
  public user:User|null;
fruit3: string = 'assets/img/fruit33.jpg'; // Path to your logo
salad1: string = 'assets/img/salad1.jpg'; // Path to your logo
salad2: string = 'assets/img/salad2.jpg'; // Path to your logo
mexi:string = 'assets/img/MexicanChilliBeanSoup.jpg';
foto:string = 'assets/img/Linfoto.jpg';
pina:string = 'assets/img/Pina-500x500.jpg';
bolonesa:string = 'assets/img/Vegan-lentil-bolognese-500x500.webp';
kukul: string = 'assets/img/Jautienos kukuliai.webp';
pyra: string= 'assets/img/pyragas-gervuogiu.webp';
herby: string= 'assets/img/Herby-lentil-salad-500x446.webp';
chicken: string= 'assets/img/BrownStewChicken.webp';
keksas: string= 'assets/img/Keksas-500x500.webp.';
avokado: string= 'assets/img/HFG-IMAGES-600-x-450-px-27-500x500.webp.';
  constructor (private authService:AuthService){
    this.user=authService.user;


  }

}