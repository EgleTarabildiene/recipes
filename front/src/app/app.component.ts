import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { ErrorBlockComponent } from './components/helper/error-block/error-block.component';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { StarComponent } from './components/star/star.component';
import { ModalComponent } from './components/modal/modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CommonModule, ErrorBlockComponent, HomePageComponent, StarComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'front';

  @ViewChild(ModalComponent) modal?: ModalComponent;


}
