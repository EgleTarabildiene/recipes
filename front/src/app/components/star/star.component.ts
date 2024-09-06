import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';


@Component({
  selector: 'app-star',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
faStar=faStar;


@Input()rating:number=0;
@Input() readonly:boolean=false;



setRating(value: number) {
  if (this.readonly) {
    return;
  }
  this.rating = value;
}
}
