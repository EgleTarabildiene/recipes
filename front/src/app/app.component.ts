import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { ErrorBlockComponent } from './components/helper/error-block/error-block.component';
import { HomePageComponent } from "./components/home-page/home-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CommonModule, ErrorBlockComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'front';

  
}
