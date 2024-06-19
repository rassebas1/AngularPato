import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
/**
 *
 */
constructor() {
  
}
ImplementedComponents= routes;
HomeTitle="Bienvenidos al Home";
Creators=["Pato","Carlos","Parrinski","Sebas" ];
}
